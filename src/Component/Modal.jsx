
import React, { useState } from 'react';

const Modal = ({ closeModal, addTask }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      addTask(taskInput);
      setTaskInput('');
      closeModal();
    }
  };

  return (
    <div className='modal-ui'>
    <div className="modal-result">
      <div className="modal-content">
        <h2>Write your Task</h2>
        <input
          className='input'
          type='text'
          placeholder='Input Field'
          value={taskInput}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Add Task</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
      </div>
    </div>
  );
};

export default Modal;
