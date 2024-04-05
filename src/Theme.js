import "./Theme.css";
import DetailView from "./DetailView.js";
import PreviewView from "./PreviewView.js";
import { useState } from "react";

export default function Theme({ colors, name }) {
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
        <DetailView colors={colors} />
      ) : (
        <PreviewView colors={colors} />
      )}
    </main>
  );
}
