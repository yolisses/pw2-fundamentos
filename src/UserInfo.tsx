import { Badge } from "./Badge";
import "./UserInfo.css";

export function UserInfo() {
  return (
    <div
      className="user-info-container"
      style={{
        alignItems: "center",
        position: "relative",
      }}
    >
      <div style={{ alignItems: "center" }}>
        <div
          style={{
            position: "relative",
            alignItems: "center",
            marginBottom: 14,
          }}
        >
          <img src="/user.png" height={137} alt="Fábio D." />
          <div
            style={{
              position: "absolute",
              bottom: -12,
            }}
          >
            <Badge>
              <img src="/star.png" alt="classificação" />
              5.0
            </Badge>
          </div>
        </div>
        <div className="user-info-name">Fábio D.</div>
      </div>
      <img
        height={112}
        src="/car.png"
        alt="Honda Civic Roxo"
        style={{ zIndex: -10, position: "absolute", left: 92 }}
      />
      <div style={{ marginLeft: "auto" }}>
        <div className="car-number">BCD0D19</div>
        <div className="car-name">Honda Civic Roxo</div>
      </div>
    </div>
  );
}
