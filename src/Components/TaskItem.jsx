import { useState } from "react";

function TaskItem({ task }) {
    const [isChecked, setIsChecked] = useState(task.completed);

    const handleChecked = () => {
        setIsChecked(!isChecked);
        console.log(isChecked);
    }
    return (
        <>
            <li className="flex space-x-3 text-xl px-8 py-3 bg-slate-100 rounded-lg">
                <input type="checkbox" className="w-4" checked={isChecked} onChange={() => handleChecked()} />
                <span style={{ textDecoration: isChecked ? 'line-through' : 'none' }} className={isChecked ? 'text-red-600' : 'none'}>
                    <p onClick={handleChecked} className="cursor-pointer">{task.text}</p>
                    {/* <img src={task.text} alt="" width={50} onClick={handleChecked} /> */}
                </span>
            </li>
        </>
    );
}

export default TaskItem;