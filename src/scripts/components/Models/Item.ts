import { IitemOperations } from '../Shared/_IitemOperations';
import { IMapping } from '../Shared/_IMapping';

export class Item implements IitemOperations, IMapping {
  id: string;

  name: string;

  createDate: string = '049/04/2021';

  creator: string = 'An Tran Hoang';

  modifiedAt: string;

  modifiedBy: string;

  icon: string;

  parent: string;

  constructor(
    id?: string,
    name?: string,
    createDate?: string,
    creator?: string,
    modifiedAt?: string,
    modifiedBy?: string,
    icon?: string,
    parent: string = 'root',
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

  add() {
    window.localStorage.setItem(this.id, JSON.stringify(this));
  }

  remove() {
    window.localStorage.removeItem(this.id);
  }

  mapping(item: any) {}
}
