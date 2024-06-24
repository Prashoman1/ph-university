import { Schema, model} from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';
import AppError from '../../error/AppError';


const academicDepartmentSchema = new Schema<TAcademicDepartment>({
    departmentName:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    academicFaculty:{        
        type:Schema.Types.ObjectId,
        ref:'AcademicFaculty',
        required:true
    }
  },
    {
        timestamps:true

    }
);

academicDepartmentSchema.pre("save", async function (next) {
    // console.log(this.password,'pre save hook');
    const departmentName:unknown = AcademicDepartment.findOne({departmentName:this.departmentName});
    if(departmentName){
        throw new AppError(404,'Department name already exist');
    }
    next();
  });
export const AcademicDepartment = model<TAcademicDepartment>('AcademicDepartment', academicDepartmentSchema);