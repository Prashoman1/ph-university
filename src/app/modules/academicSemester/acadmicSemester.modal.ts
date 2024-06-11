import { Schema, model,  } from 'mongoose';
import { TAcademicSemester, TAcademicSemesterCode, TAcademicSemesterName, TMonths } from './academicSemester.interface';



export const months:TMonths[]   =[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const academicSemesterName:TAcademicSemesterName[] = ['Autumn', 'Summar', 'Fall'];
export const acadmicSemesterCode:TAcademicSemesterCode[] = ["01","02","03"];




const academicSemesterSchema = new Schema<TAcademicSemester>({
    name:{
        type:String,
        enum:academicSemesterName,
        required:true,
        trim:true,
    },
    year:{
        type:String,
        required:true,
        trim:true,
    },
    code:{        
        type:String,
        required:true,
        enum:acadmicSemesterCode
    },
    startMonth:{
        type:String,
        required:true,
        enum:months
    },
    endMonth:{
        type:String,
        required:true,
        enum:months
    }
  },
    {
        timestamps:true

    }
);
// export const AcademicDepartment = model<TAcademicDepartment>('AcademicDepartment', academicDepartmentSchema);