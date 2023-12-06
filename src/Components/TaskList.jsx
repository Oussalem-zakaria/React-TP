import TaskItem from "./TaskItem";

function TaskList({ tasks }) {

    return (
        <>
            <ul className="space-y-4 px-4 py-5 rounded-lg bg-slate-300 shadow-lg">
                {tasks.map(((task, index) => (
                    <TaskItem key={task.id} task={task} />
                )))
                }
            </ul>
        </>
    );
}

export default TaskList;