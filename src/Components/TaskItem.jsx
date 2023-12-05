function TaskItem({ task }) {
    return (
        <>
            <li className="flex space-x-3 text-xl">
                <input type="checkbox" checked={task.completed} disabled />
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.text}
                </span>
            </li>
        </>
    );
}

export default TaskItem;