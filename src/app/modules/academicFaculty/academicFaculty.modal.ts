import { Schema, model, connect } from 'mongoose';
import { TAcademicFaculty } from './academicFaculty.interface';

const academicFacultySchema = new Schema<TAcademicFaculty>({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    }
  },
    {
        timestamps:true

    }
);


export const AcademicFaculty = model<TAcademicFaculty>('AcademicFaculty', academicFacultySchema);