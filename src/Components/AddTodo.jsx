import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, toggleComplete } from '../Redux/TodoSlice';
import '../Components/AddTodo.css'; // Import your CSS file for any non-inline styles
import { useNavigate } from 'react-router-dom';

function AddTask() {
  const taskRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.todo.data);

  const handleSubmit = () => {
    const task = taskRef.current.value.trim(); // Trim whitespace

    if (task) {
      dispatch(add({ name: task }));
      taskRef.current.value = '';
    } else {
      alert('Please enter a task!');
    }
  };

  const del = (id) => {
    dispatch(remove(id));
  };

  const toggleTaskCompletion = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className="todo-container">
      <div className="add-task-container">
        <div className="input-container">
          <div className="box">
            <input
              type="text"
              placeholder="Add a new task..."
              ref={taskRef}
            />
            <button onClick={handleSubmit}>Add</button>
          </div>
        </div>
      </div>

      {/* Spacer element for separation */}
      <div className="spacer"></div>

      <div className="task-list-container">
        <h2>Task List</h2>
        <div className="box">
          <div className="task-list">
            {lists.map((e) => (
              <div key={e.id} className="task-item">
                <input
                  type="checkbox"
                  checked={e.completed}
                  onChange={() => toggleTaskCompletion(e.id)}
                />
                {e.completed ? (
                  <div>
                    <h3>{e.name}</h3>
                    <span className="completed-text">Task Completed</span>
                  </div>
                ) : (
                  <h3>{e.name}</h3>
                )}
                <div style={{display: 'flex' }} className="button-container">
                  <button
                    style={{
                      backgroundColor: '#3f51b5', // Blue
                      color: 'white',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onClick={() => navigate(`/edittask/${e.id}`)}
                  >
                    Edit
                  </button>
                  <div style={{ marginRight: '5px' }}></div>
                  <button
                    style={{
                      backgroundColor: '#f44336', // Red
                      color: 'white',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onClick={() => del(e.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
