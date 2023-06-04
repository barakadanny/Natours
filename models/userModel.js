const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name!']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email!'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email!'] // validator package
    },
    photo: String,
    password: {
        type: String,
        required: [true, 'Please provide a password!'],
        minlength: 8
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password!'],
        validate: {
            validator: function(el) {
                return el === this.password;
            },
            message: 'Passwords are not the same!'
        }
    }
});

userShema.pre('save', async function(next) {
    // Only run this function if password was actually modified (or created) - not when updating user data
    if(!this.isModified('password')) return next();

    // Hash the password with cost of 12 - the higher the cost the longer it takes to hash the password but the more secure it is - 12 is a good number
    this.password = await bcrypt.hash(this.password, 12);

    // Delete passwordConfirm field - we don't need it anymore - it's only for validation purposes - it's not persisted in the database
    this.passwordConfirm = undefined;

    next();
});

const User = mongoose.model('User', userShema);

module.exports = User;