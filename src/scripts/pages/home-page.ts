import ready from '../utilities/_helper';
import renderGrid from '../components/_grid';
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
    generateSampleData();
    let tr = document.getElementsByTagName('tr')[1].addEventListener("click",function(){
        let id = this.cells[this.cells.length - 1].textContent;
        console.log(id);
    });
});

function generateSampleData() {
    let template = new RenderTemplate(<HTMLTableElement>document.getElementById("content-table"),ordering);
    //Generate Folder
    let folder = new Folder();
    folder.mapping(data.Folder);
    template.render(folder);
    //Generate Files
    for (let i = 0; i<data.File.length;i++) {
        let file = new File();
        file.mapping(data.File[i]);
        template.render(file);
    }
}