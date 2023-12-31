import React, { createContext, useContext, useState } from 'react';
import './index.css';
import GuestBookApp from './TP3/GuestBookApp';
import ThemeProvider from './TP4/Context2/ThemeProvider';
import ThemedMessage from './TP4/Context2/ThemedMessage';
import ThemedButton from './TP4/Context2/ThemedButton';

export const Appcontext = createContext();

export const useThemeApp = () => {
  const context = useContext(Appcontext)
  if (!context) {
    throw new Error('context not found')
  }
  return context
}

function AppTP4() {
  const [theme, setTheme] = useState("light")

  const toogleTheme = async (e) => {
    e.preventDefault();
    setTheme((theme) => (theme === "light" ? "dark" : "light"))
  }

  return (
    <>
      <div className={`px-5 py-6 h-screen`}>
        <ThemeProvider theme={theme} toogleTheme={toogleTheme}>
          <div className="flex flex-col items-center justify-center space-y-3">
          <ThemedButton />
          <ThemedMessage />
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}

export default AppTP4;
