import { useTheme } from "./ThemeProvider";

function ThemedMessage() {
    const {theme} = useTheme()

    return ( 
        <>
            <p style={{backgroundColor: theme === "light" ? "#fff" : "#111",color: theme === "light" ? "#111" : "#FFF"}} className={`py-5 px-4 border-2 border-black rounded-lg shadow-lg text-center w-72 h-72`}>
                This is a thimed message
            </p>
        </>
     );
}

export default ThemedMessage;