import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import CreateChar from './components/CreateChar';
import Home from './components/Home';
import Fight from './components/Fight';

function App() {
  return (
    <div className="App">
    <BrowserRouter basename='https://thiagaoz.github.io/mainevent/'> 
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='createchar' element={(<CreateChar />)}></Route>
        <Route path='fight' element={<Fight/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

