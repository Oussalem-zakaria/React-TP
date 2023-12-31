import TaskItem from "./TaskItem";

function TaskList({ tasks, handleChecked }) {
  
  return (
    <>
      <ul className="space-y-4 px-4 py-5 rounded-lg bg-slate-300 shadow-lg">
        {tasks.map(((task) => (
          <TaskItem key={task.id} task={task} handleChecked={handleChecked} />
        )))
        }
      </ul>
    </>
  );
}

export default TaskList;