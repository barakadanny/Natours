const crypto = require('crypto');
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
        validate: [validator.isEmail, 'Please provide a valid email!']
    },
    photo: {
        type: String,
        default: 'default.jpg'
    },
    role: {
        type: String,
        enum: ['user', 'guide', 'lead-guide', 'admin'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'Please provide a password!'],
        minlength: 8,
        select: false // password will never show up in any output
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
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    }
});

userShema.pre('save', async function(next) {
    // Only run this function if password was actually modified (or created)
    if(!this.isModified('password')) return next();

    // Hash the password with cost of 12 
    this.password = await bcrypt.hash(this.password, 12);

    // Delete passwordConfirm field - we don't need it anymore 
    // - it's only for validation purposes - it's not persisted in the database
    this.passwordConfirm = undefined;

    next();
});

userShema.pre('save', function(next) {
    // Only run this function if password was actually modified (or created)
    if(!this.isModified('password') || this.isNew) return next();

    // Subtract 1 second from the passwordChangedAt field to make sure 
    // that the token is always created after the password is changed
    this.passwordChangedAt = Date.now() - 1000;
    next();
});

userShema.pre(/^find/, function(next) {
    // this points to the current query
    this.find({ active: { $ne: false } });
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

userShema.methods.createPasswordResetToken = function() {
    const resetToken = crypto.randomBytes(32).toString('hex');

    // Encrypt the reset token
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    console.log({ resetToken }, this.passwordResetToken);

    // Set the passwordResetExpires field to 10 minutes from now
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    // Return the plain reset token
    return resetToken;
}

const User = mongoose.model('User', userShema);

module.exports = User;