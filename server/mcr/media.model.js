import mongoose from 'mongoose';

const mediaSchema = mongoose.Schema({
  //VIEW
  title: String,
  description: String,
  excerpt: String,

  scale: Number,
  northRotation: { type: Number, min: 0, max: 360 },

  //SEO
  alt: String,

  //INDEXING
  category: String,
  drawingType: String,
  project: String,
  stage: String,
  drawingType: String,
  tags: Array,
  programs: Array,

  //FILE
  src: {
    url: String,
    filename: String,
    url_original: String,
    url_3200: String,
    url_1600: String,
    url_800: String,
    url_400: String,
  },

  //ARCHIVALS
  createdAt: {
    type: Date,
    default: new Date(),
  },
  createdBy: {
    type: String,
    default: 'CHansen',
  },
});

const Media = mongoose.model('Media', mediaSchema, 'Media');

export default Media;
