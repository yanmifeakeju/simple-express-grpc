import { Schema } from 'mongoose';

const Directory = new Schema({
  fullName: {
    type: String,
    required: true
  },

  email: String,
  phone: String,

  address: {
    houseNumber: {
      type: String
    },

    street: {
      type: String,
      required: true
    },

    city: {
      type: String,
      required: true
    },

    state: {
      type: String,
      required: true
    },

    country: {
      type: String,
      required: true,
      default: 'Nigeria'
    },

    description: {
      type: String
    }
  }
});

export default Directory;
