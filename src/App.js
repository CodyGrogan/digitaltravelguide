import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Quiz from './components/Quiz';
import Itinerary from './components/Itinerary';
import QuizQuestion from './components/QuizQuestion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {useState} from 'react';

function App() {

  const [questionResponse, setQuestionResponse] = useState();
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/quiz' element={<Quiz setQuestionResponse={setQuestionResponse}/>}/>
      <Route path='/itinerary' element={<Itinerary response={questionResponse}/>}/>
      </Routes>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
