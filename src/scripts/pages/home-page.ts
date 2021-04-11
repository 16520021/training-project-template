import ready from '../utilities/_helper';
import renderGrid from '../components/_grid';
import { Item } from '../components/Models/Item';
import { Folder } from '../components/Models/Folder';
import { File } from '../components/Models/File';
import { data } from '../data/data';
import { RenderTemplate } from '../components/Models/RenderTemplate';
const ordering: Array<string> = [
    'icon',
    'name',
    'createDate',
    'creator',
    'id',
];

ready(() => {
    renderGrid();
    generateData([data.Folder]);
    generateData(data.File);
    let tr = document.getElementsByTagName('tr')[1].addEventListener("click", function () {
        let id = this.cells[this.cells.length - 1].textContent;
        clearCurrentData();
        if (data.Folder.id == id) {
            if (data.Folder.subItems.length != 0)
                generateData([data.Folder.subItems[0].Folder]);
        }
    });
});


function generateData(input: Array<any>) {
    let template = new RenderTemplate(<HTMLTableElement>document.getElementById("content-table"), ordering);
    //Generate Folder
    if (input[0].subItems) {
        for (let i = 0; i < input.length; i++) {
            let folder = new Folder();
            folder.mapping(input[i]);
            template.render(input[i]);
        }
    }

    else {
        //Generate Files
        for (let i = 0; i < input.length; i++) {
            let file = new File();
            file.mapping(input[i]);
            template.render(file);
        }
    }
};

//Clear current page data excluding header
function clearCurrentData() {
    let tr = document.getElementsByTagName('tr');
    while (tr.length != 1) {
        tr[1].remove();
    }
};