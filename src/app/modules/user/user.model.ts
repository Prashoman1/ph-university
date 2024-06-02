import bcrypt from 'bcrypt';
import { Schema,model} from 'mongoose';
import { UserInformation } from './user.interface';
// const bcrypt = require('bcrypt');

import config from '../../config';


const userSchema = new Schema<UserInformation>({
    userInfo:{
        firstName:{
            type:String,
            required:true,
            trim:true,
            validate:{
                validator:(value:string) => {
                    return value.length > 0;
                },
                message:() => 'First Name is required'
            }
        },
        lastName:{
            type:String,
            required:true,
            trim:true,
            validate:{
                validator:(value:string) => {
                    return value.length > 0;
                },
                message:() => 'Last Name is required'
            }
        }
        
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        validate:{
            validator:(value:string) => {
                return value.length > 0;
            },
            message:() => 'Email is required'
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        min:8,
        max:20,
        validate:{
            validator:(value:string) => {
                return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(value);
            },
            message: props => 'Password must be between 8 and 20 characters and include at least one letter, one number, and one special character.'
        }
    },
    gender:{
        type:String,
        required:true,
        enum: ["male","female","other"],
        validate:{
            validator:(value:string) => {
                return value.length > 0;
            },
            message:props =>`${props.value} is not a valid gender`
        }
    },
    dateOfBirth:{
        type:Date,
        required:true,
        validate:{
            validator:(value:Date) => {
                return value !== null;
            },
            message:() => 'Date of Birth is required'
        }
    },
    address:{
        type:String,
        required:true,
        trim:true,
        validate:{
            validator:(value:string) => {
                return value.length > 0;
            },
            message:() => 'Address is required'
        }
    },
    phoneNumber:{
        type:String,
        required:true,
        trim:true,
        validate:{
            validator:(value:string) => {
                const phoneNumberArray:string[] = value.split('');
                const phoneNumberFirstThreeDigits:string | any = phoneNumberArray.slice(0,3).join('');
               if(phoneNumberFirstThreeDigits === '017' || phoneNumberFirstThreeDigits === '018' || phoneNumberFirstThreeDigits === '019' || phoneNumberFirstThreeDigits === '015' || phoneNumberFirstThreeDigits === '016'){
                     if(phoneNumberArray.length === 11){
                          return true;
                     }
                    else{
                        return false;
                    }
               }
               else if(phoneNumberFirstThreeDigits === '+88'){
                const phoneNumbermiddaleThreeDigits:string | any = phoneNumberArray.slice(3,6).join('');
                if(phoneNumbermiddaleThreeDigits === '017' || phoneNumbermiddaleThreeDigits === '018' || phoneNumbermiddaleThreeDigits === '019' || phoneNumbermiddaleThreeDigits === '015' || phoneNumbermiddaleThreeDigits === '016'){
                    if(phoneNumberArray.length === 14){
                         return true;
                    }
                   else{
                       return false;
                   }
                }
               }else{
                     return false;
               }
                
            },
            message:() => 'Please Enter a BD phone number'
        }
    },
    role:{
        type:String,
        required:true,
        enum:["admin","user"],
        validate:{
            validator:(value:string) => {
                return value.length > 0;
            },
            message:props =>`${props.value} is not a valid role`
        }
    },
    isActive:{
        type:Boolean,
        default:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }


  });

  userSchema.pre('save', function(next) {
    console.log(this.password,'pre save hook');
    const user = this;
    bcrypt.hash(user.password,Number(config.ssaltRounds))
    .then(hashedPassword => {
        user.password = hashedPassword;
        next();
    })
    .catch(error => {
        next(error);
    });
    

    
    // let user = this;
    // bcrypt.hash(user.password,Number(config.ssaltRounds))
    // .then(hashedPassword => {
    //     user.password = hashedPassword;
    //     next();
    // })
    // .catch(error => {
    //     next(error);
    // });
    // next();
  });

  userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
  });


const UserSchemaModal = model<UserInformation>('User', userSchema);


export default UserSchemaModal;