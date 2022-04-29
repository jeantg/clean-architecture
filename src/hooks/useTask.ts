import { useTaskBoard } from "context";
import { useState } from "react";
import { TaskService, TaskTileService } from "services";
import { useSWRConfig } from "swr";
import { Options, Task } from "types";
import { TaskTileProps } from "../components/TaskTile/TaskTitle";
import { useModal } from "./useModal";

export function useTask({ task }: Pick<TaskTileProps, "task">) {
  const [loading, setLoading] = useState(false);
  const { mutate } = useSWRConfig();
  const { showModal, handleModal } = useModal();
  const { tasks } = useTaskBoard();

  const mutateCurrentTask = () => {
    mutate(
      `/taskboard?state=${task?.state?.value}`,
      tasks[task.state?.value || ""].filter(
        (targetTask) => targetTask.id !== task.id
      )
    );
  };
  const clean = () => {
    setLoading(false);
    handleModal();
  };
  const mutateTasks = (data: Task) => {
    const newArrayTasks = tasks[String(data.state?.value)];
    newArrayTasks.unshift(data);
    mutate(`/taskboard?state=${data.state?.value}`, newArrayTasks);
    if (task?.id) {
      mutateCurrentTask();
    }
  };
  const handleChange = (target: Options) => {
    if (target.value === task.state?.value) {
      return;
    }
    setLoading(!loading);
    TaskTileService.updateState(task?.id, target.value)
      .then((response) => mutateTasks(response.data))
      .finally(clean);
  };

  const onSubmit = (values: Task) => {
    const service = values.id ? TaskService.put : TaskService.post;
    service(values)
      .then((response) => mutateTasks(response.data))
      .finally(clean);
  };
  const remove = () => {
    setLoading(!loading);
    TaskService.delete(String(task.id)).then(mutateCurrentTask).finally(clean);
  };
  return { handleChange, loading, showModal, handleModal, onSubmit, remove };
}
