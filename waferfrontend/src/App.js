import logo from './logo.svg';
import './App.css';
import Login from './component/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Regestration from './component/Register/Regestration';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Regestration/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
