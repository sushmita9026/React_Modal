import React, { useState } from 'react';
import Modal from './Modal';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <nav className="navbar">
      <div className="nav-item">
        <h1 className='logo'>Logo</h1>
        <button onClick={openModal}>Open Modal </button>
      </div>
      {showModal && <Modal closeModal={closeModal} addTask={addTask} />}
      <div className="tasks">
        {tasks.map((task, index) => (
          <div key={index} className="task">
            {task}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
