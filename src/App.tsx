import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import CreateChar from './components/CreateChar';
import Home from './components/Home';
import MainEvent from './components/MainEvent';

function App() {
  return (
    <div className="App">
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='createchar' element={(<CreateChar />)}></Route>
        <Route path='mainevent' element={<MainEvent/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

