import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, required: true, default: false },
    images: {
      type: [String],
      required: true
    }
  },
  { timestamps: true }
);

const TaskModel = mongoose.model('tasks', taskSchema);

export default TaskModel;
