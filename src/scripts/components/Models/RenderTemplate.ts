import { Item } from './Item';

export class RenderTemplate {
  table: HTMLTableElement;

  ordering: Array<string>;

  constructor(table: HTMLTableElement, ordering: Array<string>) {
    this.table = table;
    this.ordering = ordering;
  }

  render(item: Item) {
    const numberOfLoop: number = 0;
    const row = this.table
      .getElementsByTagName('tbody')[0]
      .insertRow(-1);
    const map = new Map(Object.entries(item));

    for (let i = 0; i < this.ordering.length; i++) {
      // Render content
      const cell = row.insertCell(-1);
      if (i == 0) {
        cell.className = 'pl-md-5';
        const imgNode = document.createElement('img');
        imgNode.className = 'icon';
        imgNode.src = map.get('icon');
        cell.appendChild(imgNode);
      } else cell.innerHTML = map.get(this.ordering[i]);
    }
  }
}
