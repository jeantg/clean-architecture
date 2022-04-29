import { StateEnum } from "enums";

export * from "./options";
export const defaultState = {
  value: StateEnum.todo.name,
  name: StateEnum.todo.description,
};
