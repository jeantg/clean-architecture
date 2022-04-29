import { TaskBoardContainer, TaskShimmer, TaskTile } from "components";
import { useTaskBoard } from "context";
import { StateEnum } from "enums";
type TaskBoardItemProps = {
  state: keyof typeof StateEnum;
};
export const TaskBoardContent = ({ state }: TaskBoardItemProps) => {
  const { tasks, ...rest } = useTaskBoard();
  const currentData = tasks[StateEnum[state].value];
  const render = () => {
    if (rest[state].isValidating) {
      return (
        <TaskBoardContainer title={StateEnum[state].label}>
          {[1, 2, 4, 4].map(() => (
            <TaskShimmer />
          ))}
        </TaskBoardContainer>
      );
    }
    return (
      <TaskBoardContainer title={StateEnum[state].label}>
        {currentData?.map((task) => (
          <TaskTile task={task} key={task.createdAt} />
        ))}
      </TaskBoardContainer>
    );
  };
  return render();
};
