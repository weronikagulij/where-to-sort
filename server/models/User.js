const mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    SALT_WORK_FACTOR = 10;

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: 'Email address is required',
        maxlength: [128, 'Email cannot be longer than 128 characters'],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ]
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return !(
                    v.length < 6 ||
                    v.length > 16 ||
                    !v.match(/^(?=.*[A-ZĄĆĘŁŃÓŻŹ])(?=.*\d).*$/)
                );
            },
            message:
                'Password must contain 6-16 characters, at least one uppercase letter and at least one number.'
        }
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    emailConfirmed: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
