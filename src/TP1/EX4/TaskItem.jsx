import { useState } from "react";

function TaskItem({ task }) {
    const [isChecked, setIsChecked] = useState(task.completed);

    const handleChecked = () => {
        setIsChecked(!isChecked);
        console.log(isChecked);
    }
    return (
        <>
            <li className="flex space-x-3 items-center text-xl px-8 py-3 bg-slate-100 rounded-lg">
                <input type="checkbox" className="w-4" checked={isChecked} onChange={() => handleChecked()} />
                <span style={{ textDecoration: isChecked ? 'line-through' : 'none' }} className={isChecked ? 'text-red-600' : ''}>
                    {task.text&& <p onClick={handleChecked} className="cursor-pointer">{task.text}</p> } 
                    {task.figure && <img src={task.figure} alt="" width={50} onClick={handleChecked} className={isChecked ? 'opacity-25' : ''} /> }
                </span>
            </li>
        </>
    );
}

export default TaskItem;