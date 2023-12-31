import { FaMoon,FaSun  } from "react-icons/fa6";
import { useTheme } from "./ThemeProvider";

function ThemedButton() {
    // const {theme,toogleTheme} = useTheme()
    const {theme,toogleTheme} = useTheme()

    return ( 
        <>
            <button onClick={toogleTheme} className={`flex gap-2 items-center py-2 px-4 rounded-lg shadow-lg font-semibold capitalize ${theme === "light" ? "bg-neutral-900 text-white" : "bg-slate-100 text-black"}`}>{theme === "light" ? "dark" : "light"} <div>{theme === "light" ? <FaMoon /> : <FaSun />}</div> </button>
        </>
     );
}

export default ThemedButton;