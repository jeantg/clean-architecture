import { StateEnum } from "enums";

export const stateOptions = [
  { ...StateEnum.todo },
  { ...StateEnum.working },
  { ...StateEnum.done },
];
