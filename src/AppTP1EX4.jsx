import React, { createContext, useContext, useState } from "react";
import "./index.css";
import TaskList from "./TP1/EX4/TaskList";
import ExerciseDescription from "./Components/Exercice/Description";
import img1 from "./img/facebook.png";
import img2 from "./img/instagram.png";
import img3 from "./img/twitter.png";

function AppTP1EX4() {
  const tasks1 = [
    { id: 1, text: "Faire les courses", completed: false },
    { id: 2, text: "Apprendre React", completed: true },
    { id: 3, text: "Faire de l'exercice", completed: false },
  ];

  const tasks2 = [
    { id: 1, figure: img1, completed: false },
    { id: 2, figure: img2, completed: true },
    { id: 3, figure: img3, completed: false },
  ];

  return (
    <>
      <div className="flex-col space-y-4">
        <ExerciseDescription
          description={
            "Créez une application React qui affiche une liste de tâches statiques comme illustré ci-dessous. L’application est constitué du composant principale ‘App.js’ et de deux composant : ‘TaskItem.js’ et ‘TaskList.js’. Le composant App transmet la liste de tâches à TaskList, qui à son tour rend chaque tâche à l'aide de TaskItem."
          }
          title={"TP1 - Exercice 4:"}
        />
        <div className="flex justify-center py-5">
          <TaskList tasks={tasks1} />
        </div>
        <ExerciseDescription
          description={
            "Refaire l’exercice avec une liste de figures au lieu du texte."
          }
          title={"TP1 - Exercice 4:"}
        />
        <div className="flex justify-center py-5">
          <TaskList tasks={tasks2} />
        </div>
      </div>

    </>
  );
}

export default AppTP1EX4;
