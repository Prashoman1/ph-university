
export type TRole = 'admin' | 'student' | 'faculty';



export type UserInformation = {
    id:string;
    password:string;
    needPasswordChange:boolean;
    role:TRole;
    status:boolean;
    isDeleted:boolean;
}