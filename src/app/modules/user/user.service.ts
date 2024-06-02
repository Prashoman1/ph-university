import UserSchemaModal from "./user.model"


const createUserDB = async(userInfo:any) =>{

    const result = await UserSchemaModal.create(userInfo);
    return result;
}

export const UserServices = {
    createUserDB
}