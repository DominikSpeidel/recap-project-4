import "./Theme.css";
import DetailView from "./detailView.js";
import PreviewView from "./previewView.js";
import { useState } from "react";

export default function Theme({
  colors,
  name,
  onHandleDelete,
  id,
  onSubmit,
  onEdit,
}) {
  const [detailView, setDetailView] = useState(false);
  function toggleView() {
    setDetailView(!detailView);
  }
  console.log(colors);

  return (
    <main className="main-container">
      <h2 className="theme-title">
        {name}
        <span className="toggleButton" onClick={toggleView}>
          {detailView ? "△" : "▽"}
        </span>
      </h2>

      {detailView ? (
        <DetailView
          name={name}
          colors={colors}
          onHandleDelete={onHandleDelete}
          id={id}
          onSubmit={onSubmit}
          onEdit={onEdit}
        />
      ) : (
        <PreviewView colors={colors} />
      )}
    </main>
  );
}
