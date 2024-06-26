import { Schema, model,  } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';


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
export const AcademicDepartment = model<TAcademicDepartment>('AcademicDepartment', academicDepartmentSchema);