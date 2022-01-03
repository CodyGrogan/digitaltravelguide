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
  const [datesResponse, setDatesResponse] = useState();
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/quiz' element={<Quiz setQuestionResponse={setQuestionResponse} setDatesResponse={setDatesResponse}/>}/>
      <Route path='/itinerary' element={<Itinerary response={questionResponse} datesResponse={datesResponse}/>}/>
      </Routes>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
