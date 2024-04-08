import "./EditForm.css";

/*const INITIAL_THEME = {
  name: "",
  colors: [
    { role: "primary", value: "#6200ee" },
    { role: "secondary", value: "#03dac6" },
    { role: "surface", value: "#ffffff" },
    { role: "surface-on", value: "#000000" },
  ],
};*/

export default function EditForm({ onSubmit, colors }) {
  const initialData = colors;

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const newTheme = {
      name: data.name,
      colors: [
        {
          role: "primary",
          value: data.primary,
        },
        {
          role: "secondary",
          value: data.secondary,
        },
        {
          role: "surface",
          value: data.surface,
        },
        {
          role: "surface-on",
          value: data["surface-on"],
        },
      ],
    };
    onSubmit(newTheme);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3 className="edit">Edit Theme</h3>
        <input type="text" name="name" required></input>
        <article>
          {initialData.map((color) => (
            <input
              key={color.role}
              type="color"
              name={color.role}
              defaultValue={color.value}
            />
          ))}
        </article>
        <button className="saveButton" type="submit">
          Save Theme
        </button>
      </form>
    </div>
  );
}
