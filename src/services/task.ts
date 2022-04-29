import { Task } from "types";
import { api } from "./api";

export default {
  get: () => api.get("/task"),
  post: (data: Task) => api.post("/task", data),
  put: (data: Task) => api.put(`/task?taskId=${data.id}`, data),
  delete: (id: string) => api.delete(`/task?taskId=${id}`),
};
