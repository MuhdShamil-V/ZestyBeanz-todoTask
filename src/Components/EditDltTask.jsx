
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { update } from '../Redux/TodoSlice';
import '../Components/EditTask.css';


function EditTask() {
    const editRef = useRef();
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todo.data);
    const editTask = list.filter((e) => e.id == id);

    const handleSubmit = (id) => {
        const updateTask = editRef.current.value;
        dispatch(update({ id: id, name: updateTask }));
        navigate('/');
    };

    return (
        <div className="edit-task-container">
            <h2 className="edit-task-heading">Edit Task</h2>
            <input
                type="text"
                defaultValue={editTask[0].name}
                ref={editRef}
                className="edit-input"
            />
            <button
                onClick={() => handleSubmit(editTask[0].id)}
                className="save-button"
            >
                Save
            </button>
        </div>
    );
}

export default EditTask;
