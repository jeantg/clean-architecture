import { api } from "./api";
const requests = {
  updateState: (taskId: string | undefined, stateValue: string) =>
    api.put("/task/update/state", null, { params: { taskId, stateValue } }),
};
export default requests;
