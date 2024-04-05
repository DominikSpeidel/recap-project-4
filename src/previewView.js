import "./PreviewView.css";

export default function PreviewView({ colors }) {
  return (
    <section className="PreviewSection">
      {colors.map((color) => (
        <div
          style={{
            backgroundColor: color.value,
            width: "50px",
            height: "50px",
            padding: "0px 30px 0px 0px",
            margin: "20px 10px 20px 0px",
            borderRadius: "10px",
          }}
        ></div>
      ))}
    </section>
  );
}
