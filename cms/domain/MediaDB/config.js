import { mediaServer } from '@/config';

export const meta = {
  title: 'Media DataBase editor',
  server: mediaServer,
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
  tags: [],
  programs: [],

  //advanced options
  scale: 0,
  northRotation: 0,

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
      label: 'filename',
      key: 'filename',
      type: 'input',
    },
    {
      label: 'alt',
      key: 'alt',
      type: 'textarea',
      rows: 3,
    },
    {
      label: 'url',
      key: 'url',
      type: 'input',
    },
  ],
  advanced: [
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
      label: 'project',
      key: 'project',
      type: 'select',
      options: ['svanen', 'viking', 'kitchen'],
    },
    {
      label: 'category',
      key: 'category',
      type: 'select',
      options: ['architecture', 'webdesign', 'graphics'],
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
