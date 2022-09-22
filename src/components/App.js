import React, { useState } from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";

function App() {
  let [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeWrapper darkMode={false}>
      <Header darkMode={darkMode}
      setDarkMode={setDarkMode} />
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
