import { createContext, useContext, useState } from "react";
export const Themecontex = createContext();

export const useTheme = () => {
    const context = useContext(Themecontex)
    if (!context) {
        throw new Error('context not found')
    }
    return context
}


function ThemeProvider({ theme,toogleTheme,children }) {

    return (
        <>
            <Themecontex.Provider value={{ theme, toogleTheme }}>
                    {children}
            </Themecontex.Provider>
        </>
    );
}

export default ThemeProvider;