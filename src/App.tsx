import { MeetPage } from "./MeetPage";
import { Meet } from "./types/meet";

function App() {
  const meet: Meet = {
    user: { image: "/user.png", name: "Fábio D." },
    messages: [
      {
        user: { image: "/user2.png", name: "Ana Júlia" },
        text: "Boris estou no local já lhe esperando. estou com camisa azul e calça jeans",
      },
      {
        user: { image: "/user.png", name: "Fábio D." },
        text: "Acabei de lhe ver. Vou estacionar o carro próximo.",
      },
    ],
  };
  return <MeetPage meet={meet}></MeetPage>;
}

export default App;
