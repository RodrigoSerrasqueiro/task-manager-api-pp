import { createId } from '@paralleldrive/cuid2';
import type {
  ChangeTaskCompletionProps,
  CreateTaskProps,
  DeleteTaskProps,
  UpdateTaskProps
} from '../interfaces/tasks-services.js';
import { TaskModel } from '../models/index.js';

class TaskService {
  async createTask({ title, description, images }: CreateTaskProps) {
    const newTask = await TaskModel.create({
      id: createId(),
      title,
      description,
      images
    });

    return {
      newTask
    };
  }

  async getAllTasks() {
    const tasks = await TaskModel.find();

    return {
      tasks
    };
  }

  async updateTask({ id, title, description, images }: UpdateTaskProps) {
    const updatedTask = await TaskModel.findOneAndUpdate(
      { id },
      { title, description, images },
      { new: true }
    );

    return {
      updatedTask
    };
  }

  async changeTaskCompletion({ id }: ChangeTaskCompletionProps) {
    const taskCompleted = await TaskModel.findOneAndUpdate(
      { id },
      [{ $set: { completed: { $not: '$completed' } } }],
      { new: true }
    );

    return {
      taskCompleted
    };
  }

  async deleteTask({ id }: DeleteTaskProps) {
    const deletedTask = await TaskModel.findOneAndDelete({ id });

    return {
      deletedTask
    };
  }
}

export default new TaskService();
