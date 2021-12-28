import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Quiz from './components/Quiz';
import QuizQuestion from './components/QuizQuestion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      </Routes>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
