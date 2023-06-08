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
        minlength: 8,
        select: false // this will never show up in any output
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
    },
    passwordChangedAt: Date
});

userShema.pre('save', async function(next) {
    // Only run this function if password was actually modified (or created) - not when updating user data
    if(!this.isModified('password')) return next();

    // Hash the password with cost of 12 - the higher the cost the longer it takes to hash the password but the more secure it is
    this.password = await bcrypt.hash(this.password, 12);

    // Delete passwordConfirm field - we don't need it anymore - it's only for validation purposes - it's not persisted in the database
    this.passwordConfirm = undefined;

    next();
});

userShema.methods.correctPassword = async function(candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
}

userShema.methods.changedPasswordAfter = function(JWTTimestamp) {
    if(this.passwordChangedAt) {
        const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
        return JWTTimestamp < changedTimestamp; // 100 < 200
    }
    return false;
}

const User = mongoose.model('User', userShema);

module.exports = User;