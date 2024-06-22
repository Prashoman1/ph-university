import { Request, Response } from "express";
import { UserServices } from "./user.service";
import catchAsnc from "../../utilis/catchAsync";


const createUsersStudent = catchAsnc(async (req, res) => {

    

    const user = await UserServices.createUserDB(req.body);

    // const user = await UserServices.createStudent(req.body);
    // res.status(201).json({
    //     status: 'success',
    //     data: user
    // });
});

export const UserController ={
    createUsersStudent
}