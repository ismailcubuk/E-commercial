import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productStatus: {
        type: String,
        required: true
    },
    productDate: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    }
});
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePictures: {
        type: String,
    },
    wishlist: {
        type: Array,
        default: [],
    },
    orders: [orderSchema],
    basket: {
        type: Array,
        default: [],
    },
    addresses: {
        type: Array,
        default: [],
    },

});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
