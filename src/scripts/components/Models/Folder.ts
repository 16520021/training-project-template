import { Item } from './Item';
import { File } from './File';

export class Folder extends Item {
  subItems: Array<any>;

  constructor(
    id?: string,
    name?: string,
    createDate?: string,
    creator?: string,
    modifiedAt?: string,
    modifiedBy?: string,
    icon?: string,
    parent?: string,
  ) {
    super(
      id,
      name,
      createDate,
      creator,
      modifiedAt,
      modifiedBy,
      icon,
      parent,
    );
    this.subItems = [];
    this.icon = './dist/image/folder.png';
  }

  add() {
    // Add folder to local storage
    super.add();

    // Add folder to folder
    if (this.parent !== 'root') {
      const folder: Folder = JSON.parse(
        localStorage.getItem(this.parent),
      );
      folder.subItems.push(this);
      localStorage.setItem(folder.id, JSON.stringify(folder));
    }
  }

  remove() {
    // Remove folder from local storage
    super.remove();

    // Remove folder from folder
    const folder: Folder = JSON.parse(
      localStorage.getItem(this.parent),
    );
    let pos: number = 0;
    for (let i = 0; i < folder.subItems.length; i++) {
      if (folder.subItems[i].id === this.id) pos = i;
    }
    folder.subItems.splice(pos + 1, 1);

    // Remove all files from folder
    for (let i = 0; i < localStorage.length; i++) {
      const item: File = JSON.parse(
        localStorage.getItem(localStorage.key(i)),
      );
      if (item.parent === this.id) {
        localStorage.removeItem(item.id);
      }
    }
  }

  mapping(input: any) {
    if (input.id) this.id = input.id;
    if (input.name) this.name = input.name;
    if (input.creator) this.creator = input.creator;
    if (input.createDate) this.createDate = input.createDate;
    if (input.modifiedBy) this.modifiedBy = input.modifiedBy;
    if (input.modifiedAt) this.modifiedAt = input.modifiedAt;
    if (input.subItems) this.subItems = input.subItems;
    if (input.icon) this.icon = input.icon;
    if (input.parent) this.parent = input.parent;
    return this;
  }
}
