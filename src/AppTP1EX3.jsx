import React, { createContext, useContext, useState } from 'react';
import './index.css';
import Profile from './TP1/EX3/Profile';
import ExerciseDescription from './Components/Exercice/Description';

function AppTP1EX3() {
  return (
    <>
      <div className="flex-col space-y-4">
        <ExerciseDescription
          description={"Extraire un composant Card du balisage suivant et utiliser le prop children pour lui transmettre différents JSX :"}
          title={"TP1 - Exercice 3 :"} />
        <Profile />
      </div>
    </>
  );
}

export default AppTP1EX3;
