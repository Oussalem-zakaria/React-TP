import { useState } from "react";

function TaskItem({ task,handleChecked }) {
    // const [isChecked, setIsChecked] = useState(task.completed);

    return (
        <>
            <li className="flex space-x-3 items-center text-xl px-8 py-3 bg-slate-100 rounded-lg">
                <input type="checkbox" className="w-4" checked={task.completed} onChange={() => handleChecked(task.id)} />
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className={task.completed ? 'text-red-600' : 'none'}>
                    <p onClick={() => handleChecked(task.id)} className="cursor-pointer">{task.text}</p>
                    {/* <img src={task.text} alt="" width={50} onClick={handleChecked} /> */}
                </span>
            </li>
        </>
    );
}

export default TaskItem;