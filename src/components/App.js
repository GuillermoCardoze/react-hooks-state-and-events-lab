import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDarkMode, setIsDarkMode] = useState(false)
  const appClass = isDarkMode ? "App dark" : "App light"

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>{isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} {appClass}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;