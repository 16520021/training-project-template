import { Folder } from "./Folder";
import { Item } from "./Item";

export class File extends Item {
    constructor(
        id?: string,
        name?: string,
        createDate?: string,
        creator?: string,
        modifiedAt?: string,
        modifiedBy?: string,
        icon?: string,
        parent?: string,
        protected extension: string = ".doc") {
        super(id, name, createDate, creator, modifiedAt, modifiedBy, icon, parent);
        this.extension = extension;
        this.icon = './dist/image/excel.png';
    }

    add() {
        //Add file to local storage
        super.add();
        if (this.parent !== 'root') {
            //Add file to folder
            let folder: Folder = JSON.parse(window.localStorage.getItem(this.parent));
            folder.subItems.push(this);
            //Update local storage
            localStorage.setItem(folder.id, JSON.stringify(folder));
        }
    }

    remove() {
        //Remove file from local storage
        super.remove();

        //Remove file from folder
        if (this.parent !== 'root') {
            let folder: Folder = JSON.parse(window.localStorage.getItem(this.parent));
            let pos: number = 0;
            for (let i = 0; i < folder.subItems.length; i++) {
                if (folder.subItems[i].id === this.id) pos = i;
            }
            folder.subItems.splice(pos, 1);
            //Update local storage
            localStorage.setItem(folder.id, JSON.stringify(folder));
        }
    }

    mapping(input: any) {
        if (input.id) this.id = input.id;
        if (input.name) this.name = input.name;
        if (input.creator) this.creator = input.creator;
        if (input.createDate) this.createDate = input.createDate;
        if (input.modifiedBy) this.modifiedBy = input.modifiedBy;
        if (input.modifiedAt) this.modifiedAt = input.modifiedAt;
        if (input.extension) this.extension = input.extension;
        if (input.icon) this.icon = input.icon;
        if (input.parent) this.parent = input.parent;
        return this;
    }

}