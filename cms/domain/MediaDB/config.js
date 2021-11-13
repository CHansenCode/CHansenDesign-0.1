export const formMeta = {
  title: 'Media DataBase editor',
};

const mediaModel = {
  title: 'test2',
  alt: '',
  excerpt: '',
  description: 'explanation of the graphical imagery submitted',

  //indexing
  category: '',
  project: '',
  drawingType: '',
  tags: ['', ''],
  programs: ['', ''],

  //advanced options
  scale: 0, //any
  northRotation: 0 - 360,

  src: {
    url: 'https://media.chansen.design/category/project/filename.ext',
    filename: 'filename',
    url_original: './original',
    url_3200: './3200',
    url_1600: './1600',
    url_800: './800',
    url_400: './400',
  },
};

//#region constructors
export const formConstructor = {
  //   {
  //     label: 'example',
  //     infoHover: 'min 3 chars',
  //     type: 'input',
  //     rows: 3,
  //     options: [],
  //   },
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
      label: 'filename',
      key: 'src.filename',
      nested: true,
      type: 'input',
    },
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
