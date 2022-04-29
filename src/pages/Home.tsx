import { TaskBoard } from "components";
import { TaskBoardProvider } from "context";

const Home = () => {
  return (
    <TaskBoardProvider>
      <TaskBoard />
    </TaskBoardProvider>
  );
};
export default Home;
