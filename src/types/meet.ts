import { Message } from "./message";
import { User } from "./user";

export type Meet = {
  user: User;
  messages: Message[];
};
