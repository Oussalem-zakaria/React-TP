import TaskItem from "./TaskItem";

function TaskList({ tasks }) {

    return (
        <>
            <ul className="space-y-4">
                {tasks.map(((task, index) => (
                    <TaskItem key={task.id} task={task} />
                )))
                }
            </ul>
        </>
    );
}

export default TaskList;