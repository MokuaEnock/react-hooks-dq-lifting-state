import React from "react";

function Menu({onDarkModeChange, darkMode}) {

  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={darkMode}
          onChange={() => {onDarkModeChange((darkMode) => !darkMode)}}
        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu;
