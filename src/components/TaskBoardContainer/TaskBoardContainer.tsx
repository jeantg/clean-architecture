import { ReactNode } from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import "./style.css";

type TaskBoardProps = {
  title: string;
  children?: ReactNode;
};
export const TaskBoardContainer = ({
  title,
  children = null,
}: TaskBoardProps) => {
  return (
    <div className="taskboard-container">
      <div className="taskboard-header">
        <RiArrowRightSFill className="icon" size={22} />
        <span className="title">{title}</span>
      </div>
      <div className="overflow-y-auto pb-12 h-full">{children}</div>
    </div>
  );
};
