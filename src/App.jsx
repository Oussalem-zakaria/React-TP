import React, { useState } from 'react';
import './index.css';
import Test from './Components/Test';
import Profile from './Components/Profile';
import TaskList from './Components/TaskList';

import img1 from "../src/img/facebook.png"
import img2 from "../src/img/instagram.png"
import img3 from "../src/img/linkedin.png"
import MyButton from './Components/MyButton';
import GuestBookApp from './Components/GuestBookApp';


function App() {
  const tasks = [
    { id: 1, text: "Faire les courses", completed: false },
    { id: 2, text: "Apprendre React", completed: true },
    { id: 3, text: "'Faire de l\'exercice", completed: false },
  ];

  return (
    <>
      {/* <Test /> */}
        {/* <Profile /> */}
      {/* <div className='flex flex-col justify-center items-center container m-auto my-5'>
        <h1 className="text-2xl font-bold capitalize mb-5">Liste des Taches</h1>
        <TaskList tasks={tasks} />
      </div> */}
      {/* <MyButton/> */}
      <div className='container m-auto my-5'>
        <GuestBookApp />
      </div>
    </>
  );
}

export default App;
