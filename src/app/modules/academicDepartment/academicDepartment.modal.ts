import { Schema, model,  } from 'mongoose';


const academicFacultySchema = new Schema<TAcademicDepartment>({
    departmentName:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    faculty_id:{        
        type:Schema.Types.ObjectId,
        ref:'AcademicFaculty',
        required:true
    }

  },
    {
        timestamps:true

    }
);


export const AcademicFaculty = model<TAcademicFaculty>('AcademicFaculty', academicFacultySchema);