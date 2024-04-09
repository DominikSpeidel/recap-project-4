import { useState } from "react";
import ColorCard from "./ColorCard.js";
import "./DetailView.css";
import EditForm from "./EditForm.js";

export default function DetailView({
  colors,
  onHandleDelete,
  id,
  onSubmit,
  name,
  onEdit,
  onSubmit2,
}) {
  const [edit, setEdit] = useState(false);
  function handleEditButton() {
    setEdit(!edit);
    console.log(colors);
  }

  return (
    <>
      <button className="editButton" onClick={handleEditButton}>
        {edit ? "Go Back 👈🏽" : "Edit ✍🏽"}
      </button>
      <button className="deleteButton" onClick={() => onHandleDelete(id)}>
        Delete 🗑️
      </button>
      {edit ? (
        <EditForm
          colors={colors}
          onSubmit={onSubmit}
          themeName={name}
          id={id}
          onEdit={onEdit}
        ></EditForm>
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
