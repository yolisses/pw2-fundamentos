import { User } from "./user";

export type Message = {
  id: string;
  user: User;
  text: string;
};
