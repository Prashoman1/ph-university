import bcrypt from 'bcrypt';
import { Schema,model} from 'mongoose';
import { TRole, UserInformation } from './user.interface';
// const bcrypt = require('bcrypt');

import config from '../../config';


export const Role:TRole[] = ['admin', 'student', 'faculty'];

const userSchema = new Schema<UserInformation>({
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    needPasswordChange: { type: Boolean, default: true },
    role: { type: String, enum: Role, required: true },
    status: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
  },
{
    timestamps: true,
});

  userSchema.pre('save', function(next) {
    // console.log(this.password,'pre save hook');
    const user = this;
    bcrypt.hash(user.password,Number(config.ssaltRounds))
    .then(hashedPassword => {
        user.password = hashedPassword;
        next();
    })
    .catch(error => {
        next(error);
    });
  });

  userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
  });


const User = model<UserInformation>('User', userSchema);


export default User;