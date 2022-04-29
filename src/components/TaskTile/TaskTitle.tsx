import { AnimateOpacity, Select, Spinner, TaskModalForm } from "components";
import { MdArrowDropDown, MdModeEdit } from "react-icons/md";
import { Options, Task } from "types";
import { stateOptions } from "_constants";
import "./style.css";
import { useTask } from "hooks";
export type TaskTileProps = {
  task: Task;
  onChange?: (o: Options) => void;
};
export const TaskTile = ({ task }: TaskTileProps) => {
  const { handleChange, loading } = useTask({ task });
  return (
    <AnimateOpacity>
      <div
        className={`tasktile-container tasktile-${task.state?.value.toLowerCase()}`}
      >
        <div className="flex items-center justify-between">
          <span className="title">{task?.title}</span>
          {loading ? (
            <div>
              <Spinner />
            </div>
          ) : (
            <TaskModalForm
              initialValues={task}
              renderButton={(handleModal) => (
                <MdModeEdit
                  className="cursor-pointer icon"
                  onClick={handleModal}
                />
              )}
            />
          )}
        </div>

        <div className="mt-auto flex flex-col">
          <div className="flex  items-center mb-2">
            <span className="title text-sm ">State</span>
            <MdArrowDropDown className="icon" size={25} />
          </div>

          <Select
            options={stateOptions}
            value={task.state}
            onChange={handleChange}
          />
        </div>
      </div>
    </AnimateOpacity>
  );
};
