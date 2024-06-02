import { Request, Response } from "express";
import { UserServices } from "./user.service";


const createAnUser = async(req: Request, res: Response) => {
    try {
        const userInfo = req.body.user;
        const result = await UserServices.createUserDB(userInfo);
        if(result){
           return res.status(200).json({
                    message: "User created successfully",
                    data: result,
                    status: true   
                })
        }
         
        return res.status(400).json({
            message: "User could not be created",
            status: false,
            data:result
        });
        
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            status: false,
            data: error
        });
        
    }
}

export const UserController ={
    createAnUser
}