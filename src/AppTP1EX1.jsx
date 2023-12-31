import React, { createContext, useContext, useState } from 'react';
import './index.css';
import Test from './TP1/EX1&2/Test';
import ExerciseDescription from './Components/Exercice/Description';

function AppTP1EX1() {
  return (
    <>
      <div className="flex-col space-y-4">
        <ExerciseDescription 
        description={"En se basant sur Exercice1, proposez les différentes solutions permettant de refléter le résultat ci-dessous :"} 
        title={"TP1 - Exercice 1 + Exercice 2 :"}/>
        <Test />
      </div>
    </>
  );
}

export default AppTP1EX1;
