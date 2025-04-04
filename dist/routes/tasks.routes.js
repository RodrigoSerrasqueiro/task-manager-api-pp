import { Router } from 'express';
import { TaskController } from '../controllers/index.js';
const taskRoutes = Router();
taskRoutes.post('/', TaskController.createTask);
taskRoutes.get('/', TaskController.getAllTasks);
taskRoutes.put('/:id', TaskController.updateTask);
taskRoutes.put('/change-task-completion/:id', TaskController.changeTaskCompletion);
taskRoutes.delete('/:id', TaskController.deleteTask);
export default taskRoutes;
