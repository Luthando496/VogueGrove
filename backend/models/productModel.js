import mongoose from 'mongoose';


const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    images:[{
        url:{
            type: String,
        }
    }],
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: [true, 'Please add a category'],
      enum: ['Dress', 'Shoes', 'Accessories','Men', 'Women', 'Hoodie', 'T-shirt']
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 8,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;