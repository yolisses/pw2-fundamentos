import { ReactNode } from "react";
import "./Badge.css";

export function Badge({ children }: { children: ReactNode }) {
  return <div className="badge">{children}</div>;
}
