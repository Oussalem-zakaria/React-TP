import { useState } from "react";
import MyButton from "./MyButton";
import InitialButton from "./InitialButton";

function Buttons() {
    const [count,setCount] = useState(0);

    function handleClick() {
        setCount(count+1)
    }

    function handleInitial() {
        setCount(0)
    }

    return ( 
        <>
            <MyButton handleClick={handleClick} count={count}/>
            <MyButton handleClick={handleClick} count={count}/>
            <InitialButton handleInitial={handleInitial} />
        </>
     );
}

export default Buttons;