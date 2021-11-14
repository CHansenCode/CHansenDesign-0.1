import mongoose from 'mongoose';

const mediaSchema = mongoose.Schema({
  //VIEW
  title: String,
  alt: String,
  description: String,

  //INDEXING
  category: String,
  project: String,

  drawingType: String,
  scale: Number,
  northRotation: { type: Number, min: 0, max: 360 },

  tags: Array,
  programs: Array,

  //FILE
  url: String,
  filename: String,

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
