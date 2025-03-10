import Subjects,{ISubjects} from "./subjects_models.js";

export const createSubjects =async (subjectData:ISubjects) => {
    const subject = new Subjects(subjectData);
    return await subject.save();
};

export const getAllSubjects=async () => {
    return await Subjects.find();
};

export const getAllStudents =async (id:string) => {
    const subject = await Subjects.findById(id).select("alumni");
    return subject ? subject.alumni : [];
};

export const updateSubject = async (id:string,updateData: Partial<ISubjects>) => {
    return await Subjects.updateOne({_id:id},{$set:updateData});
};

export const deleteSubject=async (id:string) => {
  return await Subjects.deleteOne({_id:id});  
};

export const addStudentToSubject = async (id_subject:string,id_user:string) => {
    const updatedSubject = await Subjects.findByIdAndUpdate(
        id_subject,
        { $addToSet: { alumni: id_user } }, // Evita duplicados
        { new: true } // Devuelve el documento actualizado
      );
      return updatedSubject ? updatedSubject.alumni : []; 
}

