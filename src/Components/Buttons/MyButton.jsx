import { useState } from "react";

function MyButton({handleClick,count}) {
    // const [count,setCount] = useState(0);

    // function handleClick() {
    //     setCount(count+1)
    // }

    return (
        <>
            <button onClick={handleClick} className="p-3">
                Clicked {count} Time
            </button>
        </>
     );
}

export default MyButton;