import ready from '../utilities/_helper';
import renderGrid from '../components/_grid';
import { Folder } from '../components/Models/Folder';
import { File } from '../components/Models/File';
import { RenderTemplate } from '../components/Models/RenderTemplate';
import { getItemById } from '../data/dataOperation';
import { fill } from 'lodash';
const ordering: Array<string> = [
    'icon',
    'name',
    'createDate',
    'creator',
    'id',
];

const baseDirectory = 'root';
let currentDir = '';
let template = new RenderTemplate(<HTMLTableElement>document.getElementById("content-table"), ordering);
let clickedRow: string = 'root';
ready(() => {
    renderGrid();
    currentDir = baseDirectory;
    changeCurrentDirectory();
    renderLocalStorage();
    let submitButton: HTMLButtonElement = <HTMLButtonElement>document.getElementsByClassName('btn-add')[0];
    addItemEvent(submitButton);
});

//Input array of files or folder -> render.
function generateData(input: Array<any>) {
    //Generate Folder
    if (input[0].subItems) {
        for (let i = 0; i < input.length; i++) {
            let folder = new Folder();
            folder.mapping(input[i]);
            let row = template.render(folder);
            let id = row.cells[row.cells.length - 2].textContent;
            getRowIdOnHover(id, row);
            attachOnclickFolder(id, row);
            attachRemoveItemEvent(row);
        }
    }

    else {
        //Generate Files
        for (let i = 0; i < input.length; i++) {
            let file = new File();
            file.mapping(input[i]);
            let row = template.render(file);
            let id = row.cells[row.cells.length - 2].textContent;
            getRowIdOnHover(id, row);
            attachRemoveItemEvent(row);
        }
    }
};

//Render all items in local storage
function renderLocalStorage() {
    for (var i = 0; i < window.localStorage.length; i++) {
        let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (item.parent === clickedRow) generateData([item]);
    }
}

//Clear current page data excluding header
function clearCurrentData() {
    let tr = document.getElementsByTagName('tr');
    while (tr.length != 1) {
        tr[1].remove();
    }
};

//Get items in folder in local storage
function getItemInFolder(folderId: string) {
    let fold: Folder = new Folder();
    fold.mapping(JSON.parse(window.localStorage.getItem(folderId)));
    return fold;
}

//Attach on click event to view items in folder for <tr> tag
function attachOnclickFolder(id: string, tr: HTMLTableRowElement) {
    tr.addEventListener("click", function () {
        clearCurrentData();
        //Check if data is in local storage and render
        let fold = getItemInFolder(id);
        changeCurrentDirectory(fold.name);
        if (fold) {
            console.log(fold.subItems);
            fold.subItems.forEach(element => {
                if (Array.isArray(element)) {
                    generateData(element);
                }
                else generateData([element]);
            });
        }
    });
}

//Get row id on hover
function getRowIdOnHover(id: string, tr: HTMLTableRowElement) {
    tr.onmouseover = function () {
        clickedRow = id;
        console.log(clickedRow);
    }
}

//Attach add folder event to button
function addItemEvent(btn: HTMLButtonElement) {
    btn.onclick = function () {
        //Get ID field
        let idField: HTMLInputElement = <HTMLInputElement>document.getElementById("id");
        let id: string = idField.value;
        //Get Name field
        let nameField: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        let name: string = nameField.value;
        //Check if in put is a file
        let inputElem = <HTMLInputElement>document.getElementById("file");
        let isFile: boolean = inputElem.checked;

        //Add file or folder
        if (isFile) {
            let item = new File(id, name, getCurrentDate(), null, null, null, null, clickedRow, '.xlxs');
            item.add();
        } else {
            let item = new Folder(id, name, getCurrentDate(), null, null, null, null, clickedRow);
            item.add();
        }
        clearCurrentData();
        renderLocalStorage();
    }
}

function attachRemoveItemEvent(row: HTMLTableRowElement) {
    let btn = row.getElementsByClassName('close');
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
            let type: Array<string> = clickedRow.split('-');
            let parent: string = 'root';
            if (type[0] === 'file') {
                let file: File = new File();
                file.mapping(getItemById(clickedRow));
                clickedRow = file.parent;
                file.remove();
            } else {
                let folder: Folder = new Folder();
                folder.mapping(getItemById(clickedRow));
                clickedRow = folder.parent;
                folder.remove();
            }
            clearCurrentData();
            renderLocalStorage();
        })
    }
};

function changeCurrentDirectory(folder: string = '') {
    if (folder != '')
        currentDir += '/' + folder;
    document.getElementById('directory').innerHTML = currentDir;
    return currentDir;
}

function getCurrentDate(): string {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
}
