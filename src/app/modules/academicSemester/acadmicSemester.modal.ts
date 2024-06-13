import { Schema, model,  } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import { academicSemesterName, acadmicSemesterCode, months } from './academicSemester.Constant';








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
 export const AcademicSemester = model<TAcademicSemester>('AcademicSemester', academicSemesterSchema);