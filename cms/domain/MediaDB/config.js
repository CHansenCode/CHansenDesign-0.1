export const formMeta = {
  title: 'Media DataBase editor',
};

const mediaModel = {
  title: '',
  alt: '',
  description: '',

  category: '',
  project: '',

  drawingType: '',
  scale: 0, //any
  northRotation: 0 - 360,

  tags: ['', ''],
  programs: ['', ''],

  url: '',
  filename: '',

  createdBy: '',
  createdAt: '',
};

//#region constructors
export const formConstructor = {
  basic: [
    {
      label: 'title',
      key: 'title',
      type: 'input',
    },
    {
      label: 'alt',
      key: 'alt',
      type: 'textarea',
      rows: 3,
    },
    {
      label: 'filename',
      key: 'filename',
      type: 'input',
    },
    {
      label: 'category',
      key: 'category',
      type: 'select',
      options: ['architecture', 'webdesign', 'graphics'],
    },
    {
      label: 'project',
      key: 'project',
      type: 'select',
      options: [
        'svanen',
        'kitchen',
        'viking',
        'annerberg',
        'ishallen',
        'table',
      ],
    },
  ],
  advanced: [
    {
      label: 'description',
      key: 'description',
      type: 'textarea',
      rows: '3',
    },
    {
      label: 'scale',
      key: 'scale',
      type: 'input',
    },
    {
      label: 'north rotation',
      key: 'northRotation',
      type: 'input',
    },
    {
      label: 'drawingType',
      key: 'drawingType',
      type: 'input',
    },
    {
      label: 'created by',
      key: 'createdBy',
      type: 'input',
    },
  ],
};

export const listView = [
  {
    key: 'title',
  },
  {
    key: 'category',
  },
  {
    key: 'project',
  },
  {
    key: 'src.url',
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
    key: 'height',
  },
  {
    key: 'width',
  },
  {
    key: 'src.url',
  },
  {
    key: 'createdBy',
  },
  {
    key: 'createdAt',
  },
];
//#endregion
