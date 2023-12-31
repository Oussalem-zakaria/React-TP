import React, { createContext, useContext, useState } from 'react';
import './index.css';
import GuestBookApp from './TP3/GuestBookApp';

export const Appcontext = createContext();

export const useThemeApp = () => {
  const context = useContext(Appcontext)
  if (!context) {
    throw new Error('context not found')
  }
  return context
}

function App() {
  const [theme, setTheme] = useState("light")

  const toogleTheme = async (e) => {
    e.preventDefault();
    setTheme((theme) => (theme === "light" ? "dark" : "light"))
  }

  return (
    <>
      <div className={`px-5 h-screen ${ theme === "light" ? "" : "bg-neutral-900 text-white"}`}>
        <Appcontext.Provider value={{ theme, toogleTheme }}>
          <GuestBookApp />
        </Appcontext.Provider>
      </div>
    </>
  );
}

export default App;
