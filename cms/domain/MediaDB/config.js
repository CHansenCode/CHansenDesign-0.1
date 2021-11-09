export const meta = {
  title: 'Media DataBase editor',
};

//#region constructors
export const formConstructor = [
  //   {
  //     label: 'example',          //renders label above element
  //     infoHover: 'min 3 chars'   //renders infoButton on focus/hover
  //     type: 'input',             //input,password,textarea,select,radio
  //     validation: 'basic',       //alphanum, number, none
  //   },
  {
    label: 'name',
    type: 'input',
  },
];

export const listView = [
  {
    key: 'title',
  },
  //   {
  //     key: 'alt',
  //   },
  {
    key: 'description',
  },
  {
    key: 'height',
  },
  {
    key: 'width',
  },
  {
    key: 'fileName',
  },
  //   {
  //     key: 'tags',
  //   },
  //   {
  //     key: 'programs',
  //   },
  {
    key: 'urls.full',
  },
  {
    key: 'createdBy',
  },
  {
    key: 'createdAt',
  },
];
export const thumbView = [
  {
    key: 'title',
  },
  {
    key: 'alt',
  },
  {
    key: 'description',
  },
  {
    key: 'height',
  },
  {
    key: 'width',
  },
  {
    key: 'fileName',
  },
  {
    key: 'tags',
  },
  {
    key: 'programs',
  },
  {
    key: 'urls.full',
  },
  {
    key: 'createdBy',
  },
  {
    key: 'createdAt',
  },
];
//#endregion
