import { Item } from './Item';

export class Folder extends Item {
  subItems: Array<any>;

  constructor() {
    super();
    this.subItems = [];
  }

  add(item: any) {
    this.subItems.push(item);
  }

  remove(item: any) {
    const pos = this.subItems.findIndex(item);
    this.subItems.splice(pos, 1);
  }

  mapping(input: any) {
    this.id = input.id;
    this.name = input.name;
    this.creator = input.creator;
    this.createDate = input.createDate;
    this.modifiedBy = input.modifiedBy;
    this.modifiedAt = input.modifiedAt;
    this.subItems = input.subItems;
    this.icon = input.icon;
    this.parent = input.parent;
    return input;
  }
}
