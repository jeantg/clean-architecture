import { AxiosResponse } from "axios";
import { createContext, useContext } from "react";
import { SWRResponse } from "swr";
import { Task } from "types";
type TaskBoardContextData = {
  tasks: Record<string, Task[]>;
  todo: SWRResponse<AxiosResponse<Task[]>>;
  done: SWRResponse<AxiosResponse<Task[]>>;
  working: SWRResponse<AxiosResponse<Task[]>>;
};
export const TaskBoardContext = createContext({} as TaskBoardContextData);
export const useTaskBoard = (): TaskBoardContextData => {
  return { ...useContext(TaskBoardContext) };
};
export * from "./TaskBoardProvider";
