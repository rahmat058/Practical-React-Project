const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: 1,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    maxlength: 500
  },
  price: {
    type: Number,
    required: true,
    maxlength: 255
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    require: true
  },
  shipping: {
    type: Boolean,
    required: true
  },
  available: {
    type: Boolean,
    required: true
  },
  wood: {
    type: Schema.Types.ObjectId,
    ref: 'Wood',
    require: true
  },
  frets: {
    type: Number,
    required: true
  },
  sold: {
    type: Number,
    maxlength: 100,
    default: 0
  },
  publish: {
    type: Boolean,
    required: true
  },
  images: {
    type: Array,
    default: []
  }
}, {
  timestamps: true
})

const Product = mongoose.model('Product', productSchema);

module.exports = {
  Product
}