import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Redux/TodoSlice'; 
import '../Components/AddTodo.css';

function AddTask() {
  const taskRef = useRef(null);
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.todo.data);

  const handleSubmit = () => {
    const task = taskRef.current.value;
    dispatch(add({ name: task }));
    taskRef.current.value = '';
  };

  return (
    
    <div className="add-task-container">
        <h2>Add Task</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          ref={taskRef}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
      <div className="task-list">
        {lists.map((e) => (
          <div key={e.id} className="task-item">
            <h3>{e.name}</h3>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddTask;