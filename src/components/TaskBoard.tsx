import { Button } from "components";
import { TaskBoardContent } from "./TaskBoardContent";
import { TaskModalForm } from "./TaskModalForm";

export const TaskBoard = () => {
  return (
    <div>
      <div className="flex items-center justify-center home">
        <TaskBoardContent state="todo" />
        <TaskBoardContent state="working" />
        <TaskBoardContent state="done" />
      </div>

      <TaskModalForm
        renderButton={(handleModal) => (
          <div className="absolute top-4 right-4">
            <Button onClick={handleModal} className="button-primary">
              Create Task
            </Button>
          </div>
        )}
      />
    </div>
  );
};
