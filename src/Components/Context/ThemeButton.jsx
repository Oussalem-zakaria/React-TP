import { useContext } from "react";
import { ThemeContext, useTheme } from "./ThemeProvider";

function ThemeButton() {
    const {theme, toogleTheme} = useTheme()
    
    return ( 
        <>
            <button className="px-5 py-5" style={{backgroundColor: theme === 'light' ? "#fff" : "#111",color: theme === 'light' ? "#111" : "#fff" }} onClick={toogleTheme}>Toogle Theme</button>
        </>
     );
}

export default ThemeButton;

