const mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    SALT_WORK_FACTOR = 10,
    jwt = require('jsonwebtoken');

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
    },
    token: {
        type: String
    }
});

UserSchema.pre('save', function(next) {
    var user = this;

    /**
     * Hash password
     */
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = (candidatePassword, cb) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) {
            return cb(err);
        }

        cb(null, isMatch);
    });
};

UserSchema.methods.generateToken = (cb) => {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), process.env.SECRET);
    user.token = token;
    user.save((err,user) => {
        if (err) {
            return cb(err);
        }

        cb(null, user);
    })
};

UserSchema.statics.findByToken = (token,cb) => {
    var user = this;
    jwt.verify(token,process.env.SECRET, (err, decode) => {
        user.findOne({"_id":decode, "token":token}, (err,user) => {
            if (err) {
                return cb(err);
            }

            cb(null,user);
        });
    });
};

module.exports = mongoose.model('User', UserSchema);
