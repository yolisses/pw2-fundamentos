import { createContext, useContext, useState } from "react";
import { ChildrenProps } from "./ChildrenProps";
import { clientUser, defaultMeet } from "./defaultMeet";
import { Meet } from "./types/meet";

type MeetContext = {
  meet: Meet;
  addMessage(text: string): void;
  deleteMessage(id: string): void;
};

const meetContext = createContext({} as MeetContext);

export function MeetContextProvider({ children }: ChildrenProps) {
  const [meet, setMeet] = useState(defaultMeet);

  function deleteMessage(id: string) {
    setMeet((old) => ({
      ...old,
      messages: old.messages.filter((message) => message.id !== id),
    }));
  }

  function addMessage(text: string) {
    setMeet((old) => ({
      ...old,
      messages: old.messages.concat({
        text,
        user: clientUser,
        id: "" + Math.random(),
      }),
    }));
  }

  return (
    <meetContext.Provider value={{ meet, addMessage, deleteMessage }}>
      {children}
    </meetContext.Provider>
  );
}

export function useMeet() {
  return useContext(meetContext);
}
