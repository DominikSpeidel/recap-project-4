import "./ColorCard.css";

export default function ColorCard({ color }) {
  return (
    <article className="color-card">
        <div className="color-card__info">
            <p className="color-card__role">{color.role}</p>
            <p className="color-card__hex">{color.value}</p>
        </div>
        <div
            className="color-card__display"
            style={{ backgroundColor: color.value }}
        ></div>
    </article>
  );
}