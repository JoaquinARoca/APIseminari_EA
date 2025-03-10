import express from "express";
import {
  createSubjectHandler,
  getAllSubjectsHandler,
  getAllStudentsHandler,
  updateSubjectHandler,
  deleteSubjectHandler,
  addStudentToSubjectHandler,
} from "../subjects/subjects_controller.js";

const router = express.Router();

/**
 * @openapi
 * /api/subjects:
 *   post:
 *     summary: Crea una nueva materia
 *     description: Añade una nueva materia con un nombre y un profesor asignado.
 *     tags:
 *       - Subjects
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *     responses:
 *       201:
 *         description: Materia creada exitosamente
 */
router.post("/subjects", createSubjectHandler);

/**
 * @openapi
 * /api/subjects:
 *   get:
 *     summary: Obtiene todas las materias
 *     description: Retorna una lista de todas las materias registradas.
 *     tags:
 *       - Subjects
 *     responses:
 *       200:
 *         description: Lista de materias obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   teacher:
 *                     type: string
 */
router.get("/subjects", getAllSubjectsHandler);

/**
 * @openapi
 * /api/subjects/{id}/students:
 *   get:
 *     summary: Obtiene todos los alumnos de una materia
 *     description: Retorna la lista de alumnos inscritos en una materia específica.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de alumnos obtenida correctamente
 *       404:
 *         description: Materia no encontrada
 */
router.get("/subjects/:id/students", getAllStudentsHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   put:
 *     summary: Actualiza una materia por ID
 *     description: Modifica la información de una materia específica.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *     responses:
 *       200:
 *         description: Materia actualizada correctamente
 *       404:
 *         description: Materia no encontrada
 */
router.put("/subjects/:id", updateSubjectHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   delete:
 *     summary: Elimina una materia por ID
 *     description: Borra una materia específica del sistema.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Materia eliminada correctamente
 *       404:
 *         description: Materia no encontrada
 */
router.delete("/subjects/:id", deleteSubjectHandler);

/**
 * @openapi
 * /api/subjects/add-student:
 *   post:
 *     summary: Agrega un alumno a una materia
 *     description: Añade un alumno al array de alumnos inscritos en una materia específica.
 *     tags:
 *       - Subjects
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_subject:
 *                 type: string
 *               id_user:
 *                 type: string
 *     responses:
 *       200:
 *         description: Alumno agregado correctamente
 *       404:
 *         description: Materia no encontrada
 */
router.post("/subjects/add-student", addStudentToSubjectHandler);

export default router;

