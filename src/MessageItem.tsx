import { useMeet } from "./MeetContext";
import "./MessageItem.css";
import { clientUser } from "./defaultMeet";
import { Message } from "./types/message";

type Props = {
  message: Message;
};

export function MessageItem({ message }: Props) {
  const { deleteMessage } = useMeet();

  function handleClick() {
    deleteMessage(message.id);
  }

  return (
    <div className="message-item">
      <img src={message.user.image} alt={message.user.name} />
      {message.text}
      {message.user.id === clientUser.id && (
        <button onClick={handleClick}>
          <img src="/trash.svg" alt="delete" />
        </button>
      )}
    </div>
  );
}
