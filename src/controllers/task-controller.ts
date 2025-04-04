import type { Request, Response } from 'express';
import { createTaskSchema } from '../schemas/create-task-schema.js';
import { TaskService } from '../services/index.js';
import { handleValidationError } from '../utils/validation-errors.js';
import {
  updateTaskParamsSchema,
  updateTaskBodySchema
} from '../schemas/update-task-schema.js';

class TaskController {
  async createTask(req: Request, res: Response) {
    try {
      const data = createTaskSchema.parse(req.body);

      const { title, description, images } = data;

      const newTask = await TaskService.createTask({
        title,
        description,
        images
      });

      res.status(201).json(newTask);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        handleValidationError(error, res);
        return;
      }
      res
        .status(400)
        .json({ message: 'Erro ao criar nova tarefa', error: error.message });
    }
  }

  async getAllTasks(_: Request, res: Response) {
    try {
      const tasks = await TaskService.getAllTasks();

      res.status(200).json(tasks);
    } catch (error: any) {
      res.status(500).json({
        message: 'Erro ao obter tarefas.',
        error: error.message
      });
    }
  }

  async updateTask(req: Request, res: Response) {
    try {
      const params = updateTaskParamsSchema.parse(req.params);
      const data = updateTaskBodySchema.parse(req.body);

      const { id } = params;
      const { title, description, images } = data;

      const updatedTask = await TaskService.updateTask({
        id,
        title,
        description,
        images
      });

      res
        .status(200)
        .json({ message: 'Tarefa atualizada com sucesso.', updatedTask });
    } catch (error: any) {
      console.log(error);
      if (error.name === 'ZodError') {
        handleValidationError(error, res);
        return;
      }
      res
        .status(500)
        .json({ message: 'Erro ao atualizar tarefa', error: error.message });
    }
  }
}

export default new TaskController();
