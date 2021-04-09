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

  constructor(
    id?: number,
    name?: string,
    createDate?: string,
    creator?: string,
    modifiedAt?: string,
    modifiedBy?: string,
    icon?: string,
  ) {
    if (id) this.id = id;
    if (name) this.name = name;
    if (createDate) this.createDate = createDate;
    if (creator) this.creator = creator;
    if (modifiedAt) this.modifiedAt = modifiedAt;
    if (modifiedBy) this.modifiedBy = modifiedBy;
    if (icon) this.icon = icon;
  }

  add(item: any) {}

  remove(item: any) {}

  mapping(item: any) {}
}
