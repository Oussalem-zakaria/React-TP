import { useTheme } from "./ThemeProvider";

function ThemeMessage() {
    const {theme} = useTheme();

    return (

        <>
            <p style={{color: theme === "light" ? "#222" : "#fff",backgroundColor: theme === 'light' ? "#fff" : "#333"}}>This is a theme message</p>
        </>
     );
}

export default ThemeMessage;