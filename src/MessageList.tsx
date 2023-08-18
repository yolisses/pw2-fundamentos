import { MessageItem } from "./MessageItem";
import "./MessageList.css";
import { Message } from "./types/message";

type Props = {
  messages: Message[];
};

export function MessageList({ messages }: Props) {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <MessageItem message={message} />
      ))}
    </div>
  );
}
