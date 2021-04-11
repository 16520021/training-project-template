import { Item } from "./Item";

export class File extends Item {
    constructor(
        protected extension: string = ".doc") {
        super();
        this.extension = extension;
    }

    add(item: any) {

    }

    remove(item: any) {

    }

    mapping(input: any) {
        this.id = input.id;
        this.name = input.name;
        this.creator = input.creator;
        this.createDate = input.createDate;
        this.modifiedBy = input.modifiedBy; 
        this.modifiedAt = input.modifiedAt;
        this.extension = input.extension;
        this.icon = input.icon;
        this.parent = input.parent;
        return input;
    }

}