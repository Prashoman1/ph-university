import { Schema, model,  } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import { academicSemesterName, acadmicSemesterCode, mapperCheck, months } from './academicSemester.Constant';








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

academicSemesterSchema.pre('save', async function(next) {

    const exitSemester = await AcademicSemester.findOne({
        name:this.name,
        year:this.year,
    });
    if(exitSemester){
        throw new Error('Semester already exist');
    }
    if(mapperCheck[this.name] !== this.code){
        throw new Error('Invalid Semester code');
    }
    
    next();
  });
 export const AcademicSemester = model<TAcademicSemester>('AcademicSemester', academicSemesterSchema);