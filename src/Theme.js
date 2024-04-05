import "./Theme.css";
import DetailView from "./detailView.js";
import PreviewView from "./previewView.js";
import { useState } from "react";

export default function Theme({ colors, name, onHandleDelete, id }) {
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
        <DetailView colors={colors} onHandleDelete={onHandleDelete} id={id} />
      ) : (
        <PreviewView colors={colors} />
      )}
    </main>
  );
}
