import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../Redux/TodoSlice'; 
import '../Components/AddTodo.css';
import { useNavigate } from 'react-router-dom';

function AddTask() {
  const taskRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.todo.data);

  const handleSubmit = () => {
    const task = taskRef.current.value;
    dispatch(add({ name: task }));
    taskRef.current.value = '';
  };

  const del = (id) => {
    dispatch(remove(id));
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
            <button onClick={() => navigate(`/edittask/${e.id}`)}>Edit</button>
            <button onClick={() => del(e.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddTask;