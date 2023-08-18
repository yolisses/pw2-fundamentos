import "./Badge.css";
import { ChildrenProps } from "./ChildrenProps";

export function Badge({ children }: ChildrenProps) {
  return <div className="badge">{children}</div>;
}
