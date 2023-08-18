import { Contact } from "./Contact";
import "./MeetPage.css";
import { MessageList } from "./MessageList";
import { UserInfo } from "./UserInfo";
import { Meet } from "./types/meet";

type Props = {
  meet: Meet;
};

export function MeetPage({ meet }: Props) {
  return (
    <div className="meet-page">
      <div className="handle-container">
        <div className="handle" />
      </div>
      <div>
        <h1>
          Encontre <span className="text-highlight">{meet.user.name}</span> no
          local de partida
        </h1>
        <div className="weight-500">Chega em 3 minutos (800 metros)</div>
      </div>
      <UserInfo />
      <Contact />
      <MessageList messages={meet.messages}></MessageList>
    </div>
  );
}
