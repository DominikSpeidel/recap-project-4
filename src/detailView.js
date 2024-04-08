import { useState } from "react";
import ColorCard from "./ColorCard.js";
import "./DetailView.css";
import EditForm from "./EditForm.js";

export default function DetailView({ colors, onHandleDelete, id }) {
  const [edit, setEdit] = useState(false);
  function handleEditButton() {
    setEdit(!edit);
    console.log(colors);
  }

  return (
    <>
      <button onClick={handleEditButton}>{edit ? "back" : "Edit"}</button>
      <button onClick={() => onHandleDelete(id)}>Delete</button>
      {edit ? (
        <EditForm colors={colors}></EditForm>
      ) : (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li key={index}>
              <ColorCard color={color} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
