import "./MessageItem.css";
import { Message } from "./types/message";

type Props = {
  message: Message;
};

export function MessageItem({ message }: Props) {
  return (
    <div className="message-item">
      <img src={message.user.image} alt={message.user.name} />
      {message.text}
      <button>
        <img src="/trash.svg" alt="delete" />
      </button>
    </div>
  );
}
