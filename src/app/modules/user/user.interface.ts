export type User ={
    firstName:string;
    lastName:string;
} 



export type UserInformation = {
    userInfo:User;
    email:string;
    password:string;
    gender:"male" | "female" | "other";
    dateOfBirth:Date;
    address:string;
    phoneNumber:string;
    role:"admin" | "user";
    isActive:boolean;
    isDeleted:boolean;
    createdAt:Date;
    updatedAt:Date;
}