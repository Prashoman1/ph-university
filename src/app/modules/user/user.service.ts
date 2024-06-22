import { UserInformation } from "./user.interface";
import User from "./user.model";



const createUserDB = async(payload:UserInformation) =>{

    payload.password = payload?.password || 'PHI@1234'

    const result = await User.create(payload);
    console.log(result,'result');
    
    return result;
}

export const UserServices = {
    createUserDB
}