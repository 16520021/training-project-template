export const data = {
  Folder: {
    subItems: [
      {
        Folder: {
          parent: 'fold-1',
          subItems: [
            {
              File: [
                {
                  parent: 'fold-2',
                  extension: '.doc',
                  id: 'file-1',
                  name: 'reportT',
                  createDate: '04/09/2021',
                  creator: 'Thanh Pham',
                  modifiedAt: '',
                  modifiedBy: '',
                  icon: './dist/image/excel.png',
                }
              ]
            }
          ],
          id: 'fold-2',
          name: 'SubFolder',
          creator: 'Thinh Le Tat',
          createDate: '04/09/2021',
          modifiedAt: 'A few seconds ago',
          modifiedBy: 'Thinh Le Tat',
          icon: './dist/image/folder.png',
        },
      },
    ],
    parent: 'root',
    id: 'fold-1',
    name: 'CAS',
    createDate: '04/09/2021',
    creator: 'An Tran Hoang',
    modifiedAt: 'A few seconds ago',
    modifiedBy: 'Thanh Le Pham',
    icon: './dist/image/folder.png',
  },

  File: [
    {
      parent: 'root',
      extension: '.doc',
      id: 'file-1',
      name: 'reportA',
      createDate: '04/09/2021',
      creator: 'An Tran Hoang',
      modifiedAt: '',
      modifiedBy: '',
      icon: './dist/image/excel.png',
    },
    {
      parent: 'root',
      extension: '.xlxs',
      id: 'file-2',
      name: 'reportB',
      createDate: '04/09/2021',
      creator: 'An Tran Hoang',
      modifiedAt: '',
      modifiedBy: '',
      icon: './dist/image/excel.png',
    },
    {
      parent: 'root',
      extension: '.xlxs',
      id: 'file-3',
      name: 'reportC',
      createDate: '04/09/2021',
      creator: 'An Tran Hoang',
      modifiedAt: '',
      modifiedBy: '',
      icon: './dist/image/excel.png',
    },
  ],
};
