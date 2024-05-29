import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './Components/AddTodo';
import EditTask from './Components/EditDltTask';

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddTask />} />
          <Route path='/edittask/:id' element={<EditTask /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
