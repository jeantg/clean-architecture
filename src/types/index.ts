import { Options } from "./select";

export * from "./select";
export type Task = {
  title?: string;
  id?: string;
  state?: Options;
  createdAt?: string;
};
