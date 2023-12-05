import React from 'react';
import './index.css';
import Test from './Components/Test';
import Profile from './Components/Profile';
import TaskList from './Components/TaskList';


function App() {
  const tasks = [
    { id: 1, text: 'Faire les courses', completed: false },
    { id: 2, text: 'Apprendre React', completed: true },
    { id: 3, text: 'Faire de l\'exercice', completed: false },
  ];

  return (
    <>
      {/* <Test /> */}
      <div className='container m-auto my-5'>
        {/* <Profile /> */}
        <h1 className="text-2xl font-bold capitalize mb-5">Liste des Taches</h1>
        <TaskList tasks={tasks} />
      </div>
    </>
  );
}

export default App;
