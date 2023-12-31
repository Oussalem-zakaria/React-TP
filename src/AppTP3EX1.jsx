import React from 'react';
import './index.css';
import GuestBookApp from './TP3/GuestBookApp';
import ExerciseDescription from './Components/Exercice/Description';

function AppTP3EX1() {
  return (
    <>
      <div className="flex-col space-y-4 container mx-auto">
        <ExerciseDescription
          description={"Créer une application React qui contient un livre d'or. L'application comprend un formulaire avec des champs pour le nom, l'e-mail, le pays et le message. Après la soumission du formulaire, les données sont affichées en dessous du formulaire. "}
          title={"TP3:"} />
        <div className={`px-5 h-screen`}>
          <GuestBookApp />
        </div>
      </div>
    </>
  );
}

export default AppTP3EX1;
