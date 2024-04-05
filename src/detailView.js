import ColorCard from "./ColorCard.js";
import "./DetailView.css";

export default function DetailView({ colors, onHandleDelete, id }) {
  //console.log(colors);
  return (
    <>
      <button onClick={() => onHandleDelete(id)}>Delete Theme</button>
      <ul className="color-list">
        {colors.map((color, index) => (
          <li key={index}>
            <ColorCard color={color} />
          </li>
        ))}
      </ul>
    </>
  );
}
