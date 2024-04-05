import ColorCard from "./ColorCard.js";
import "./DetailView.css";

export default function DetailView({ colors }) {
  return (
    <ul className="color-list">
      {colors.map((color, index) => (
        <li key={index}>
          <ColorCard color={color} />
        </li>
      ))}
    </ul>
  );
}
