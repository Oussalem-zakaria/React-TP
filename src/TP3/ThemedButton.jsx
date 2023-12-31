import { FaMoon,FaSun  } from "react-icons/fa6";
import { useThemeApp } from "../App";

function ThemedButton() {
    // const {theme,toogleTheme} = useTheme()
    const {theme,toogleTheme} = useThemeApp()

    return ( 
        <>
            <button onClick={toogleTheme} className={`flex gap-2 items-center py-2 px-4 rounded-lg shadow-lg font-semibold capitalize ${theme === "light" ? "bg-neutral-900 text-white" : "bg-slate-100 text-black"}`}>{theme === "light" ? "dark" : "light"} <div>{theme === "light" ? <FaMoon /> : <FaSun />}</div> </button>
        </>
     );
}

export default ThemedButton;