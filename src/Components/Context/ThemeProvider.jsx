import { createContext, useContext, useState } from "react";
export const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("error")
    }
    return context
}

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState('light')

    const toogleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{theme,toogleTheme}}>
            {children}
        </ThemeContext.Provider>
     );
}
