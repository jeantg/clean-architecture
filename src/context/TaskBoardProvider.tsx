import { TaskBoardContext } from "context";
import { StateEnum } from "enums";
import { useCustomSwr } from "hooks";

import { Task } from "types";

export const TaskBoardProvider: React.FC = ({ children }) => {
  const requests = {
    todo: useCustomSwr<Task[]>(`/taskboard?state=${StateEnum.todo.value}`),
    working: useCustomSwr<Task[]>(
      `/taskboard?state=${StateEnum.working.value}`
    ),
    done: useCustomSwr<Task[]>(`/taskboard?state=${StateEnum.done.value}`),
  };
  const { todo, done, working } = requests;
  const tasks: Record<string, Task[]> = {
    [StateEnum.todo.value]: todo?.data?.data || [],
    [StateEnum.working.value]: working?.data?.data || [],
    [StateEnum.done.value]: done.data?.data || [],
  };
  return (
    <TaskBoardContext.Provider value={{ tasks, ...requests }}>
      {children}
    </TaskBoardContext.Provider>
  );
};
