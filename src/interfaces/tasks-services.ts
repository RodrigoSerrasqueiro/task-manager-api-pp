export interface CreateTaskProps {
  title: string;
  description: string;
  images: Array<string>;
}

export interface UpdateTaskProps {
  id: string;
  title: string;
  description: string;
  images: Array<string>;
}
