import mongoose from 'mongoose';

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
    orders: {
        type: Array,
        default: [],
    },
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
