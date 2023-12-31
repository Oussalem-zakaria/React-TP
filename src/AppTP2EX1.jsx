import React, { createContext, useContext, useState } from 'react';
import './index.css';
import TaskList from './TP2/EX1/TaskList';
import ExerciseDescription from './Components/Exercice/Description';

function AppTP2EX1() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Faire les courses', completed: false },
    { id: 2, text: 'Apprendre React', completed: true },
    { id: 3, text: 'Faire de l/exercice', completed: false },
  ]);

  const handleChecked = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  console.log(tasks);

  return (
    <>
      <div className="flex-col space-y-4">
        <ExerciseDescription
          description={"Rappel Exercice 4 : Créez une application React qui affiche une liste de tâches statiques comme illustré cidessous. L’application est constitué du composant principale ‘App.js’ et de deux composant : ‘TaskItem.js’ et ‘TaskList.js’. Le composant App transmet la liste de tâches à TaskList, qui à son tour rend chaque tâche à l'aide de TaskItem."}
          title={"TP2 - Exercice 1 (Suite de l’exercice 4 / TP1):"} />
        <div className="flex justify-center py-6">
          <TaskList tasks={tasks} handleChecked={handleChecked} />
        </div>
      </div>

    </>
  );
}

export default AppTP2EX1;
