import { Request, Response } from "express";
import {
  createSubjects,
  getAllSubjects,
  getAllStudents,
  updateSubject,
  deleteSubject,
  addStudentToSubject,
} from "./subjects_service.js";

// Handler para crear una nueva materia
export const createSubjectHandler = async (req: Request, res: Response) => {
  try {
    const subjectData = req.body;
    const newSubject = await createSubjects(subjectData);
    res.status(201).json(newSubject);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la materia", details: error });
  }
};

// Handler para obtener todas las materias
export const getAllSubjectsHandler = async (_req: Request, res: Response) => {
  try {
    const subjects = await getAllSubjects();
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las materias", details: error });
  }
};

// Handler para obtener todos los alumnos de una materia
export const getAllStudentsHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const students = await getAllStudents(id);
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los alumnos", details: error });
  }
};

// Handler para actualizar una materia
export const updateSubjectHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    await updateSubject(id, updateData);
    res.status(200).json({ message: "Materia actualizada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la materia", details: error });
  }
};

// Handler para eliminar una materia
export const deleteSubjectHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteSubject(id);
    res.status(200).json({ message: "Materia eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la materia", details: error });
  }
};

// Handler para agregar un estudiante a una materia
export const addStudentToSubjectHandler = async (req: Request, res: Response) => {
  try {
    const { id_subject, id_user } = req.body;
    const updatedAlumni = await addStudentToSubject(id_subject, id_user);
    res.status(200).json({ message: "Alumno agregado correctamente", alumni: updatedAlumni });
  } catch (error) {
    res.status(500).json({ error: "Error al agregar alumno", details: error });
  }
};
