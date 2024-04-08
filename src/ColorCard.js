import { useState } from "react";
import "./ColorCard.css";
import { useEffect } from "react";

export default function ColorCard({ color }) {
  const [colorName, setColorName] = useState("");

  useEffect(() => {
    async function fetchColorName() {
      const response = await fetch(
        `https://www.thecolorapi.com/id?hex=${color.value.substring(1)}`
      );
      const data = await response.json();
      console.log(data.name);
      setColorName(data.name.value);
      return data;
    }
    fetchColorName();
  }, [color]); // hier darauf achten, evtl. brachst du color.value als Eingabe nach Part 6

  return (
    <article className="color-card">
      <div className="color-card__info">
        <p className="color-card__role">{color.role}</p>
        <p>{colorName}</p>
        <p className="color-card__hex">{color.value}</p>
      </div>
      <div
        className="color-card__display"
        style={{ backgroundColor: color.value }}
      ></div>
    </article>
  );
}
