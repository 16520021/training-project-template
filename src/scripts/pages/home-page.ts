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
  ];

ready(() => {
    renderGrid();
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
});