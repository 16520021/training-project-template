import { IitemOperations } from '../Shared/_IitemOperations';
import { IMapping } from '../Shared/_IMapping';

export class Item implements IitemOperations, IMapping {
  id: number;

  name: string;

  createDate: string;

  creator: string;

  modifiedAt: string;

  modifiedBy: string;

  icon: string;

  parent: string;

  constructor(
    id?: number,
    name?: string,
    createDate?: string,
    creator?: string,
    modifiedAt?: string,
    modifiedBy?: string,
    icon?: string,
    parent?: string,
  ) {
    if (id) this.id = id;
    if (name) this.name = name;
    if (createDate) this.createDate = createDate;
    if (creator) this.creator = creator;
    if (modifiedAt) this.modifiedAt = modifiedAt;
    if (modifiedBy) this.modifiedBy = modifiedBy;
    if (icon) this.icon = icon;
    if (parent) this.parent = parent;
  }

  add(item: any) {
    window.localStorage.setItem(item.id,item);
  }

  remove(item: any) {
    window.localStorage.removeItem(item.id);
  }

  mapping(item: any) {}
}
