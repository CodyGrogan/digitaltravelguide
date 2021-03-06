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
  const [activityCards, setActivityCards] = useState();
  const [textList, setTextList] = useState();
  function getCards(){
    return activityCards;
  }
  function getText(){
    return textList;
  }

  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/quiz' element={<Quiz setQuestionResponse={setQuestionResponse} setDatesResponse={setDatesResponse} setActivityCards={setActivityCards} setTextList={setTextList}/>}/>
      <Route path='/itinerary' element={<Itinerary getCards={getCards} getText={getText}/>}/>
      <Route path='*' element={<Home/>} />
      </Routes>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
