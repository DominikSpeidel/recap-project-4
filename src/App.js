//import { useState } from "react";
import "./App.css";
import { themes as initialThemes } from "./db.js";
import Theme from "./Theme.js";
import ThemeForm from "./ThemeForm.js";
import { v4 as uuid } from "uuid";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

  function handleAddTheme(newTheme) {
    const newThemeWithId = { ...newTheme, id: uuid() };
    setThemes([newThemeWithId, ...themes]);
  }

  function handleDeleteTheme(id) {
    //console.log(id);
    setThemes(themes.filter((theme) => theme.id !== id));
  }

  return (
    <>
      <header className="header">
        <h1>Theme Creator</h1>
      </header>
      <ThemeForm onSubmit={handleAddTheme} />
      {themes.map((theme) => (
        <Theme
          name={theme.name}
          colors={theme.colors}
          onHandleDelete={handleDeleteTheme}
          id={theme.id}
          onSubmit={handleAddTheme}
        />
      ))}
    </>
  );
}
