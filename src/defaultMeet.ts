import { Meet } from "./types/meet";
import { User } from "./types/user";

export const clientUser: User = {
  id: "2",
  image: "/user2.png",
  name: "Ana Júlia",
};
export const driverUser: User = {
  id: "1",
  image: "/user.png",
  name: "Fábio D.",
};

export const defaultMeet: Meet = {
  user: driverUser,
  messages: [
    {
      id: "1",
      user: clientUser,
      text: "Boris estou no local já lhe esperando. estou com camisa azul e calça jeans",
    },
    {
      id: "2",
      user: driverUser,
      text: "Acabei de lhe ver. Vou estacionar o carro próximo.",
    },
  ],
};
