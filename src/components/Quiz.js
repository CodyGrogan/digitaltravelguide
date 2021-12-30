import { useState, useEffect } from "react";
import QuizQuestion from "./QuizQuestion";
import DateSelector from "./DateSelector";
import questionObjArr from "./questionList";
import { Link } from "react-router-dom";

function Quiz(props){

const [questionList, setQuestionList] = useState(questionObjArr);
const [answerList, setAnswerList] = useState([]);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [questionIndex, setQuestionIndex] = useState(0);
const [dates, setDates] = useState(null);
console.log(dates);
console.log(questionObjArr[0].content)
useEffect(()=>{
   if (questionList.length == answerList.length){
       console.log(answerList);
       let responseList = answerList.slice(0);
       props.setQuestionResponse(responseList);
       let quiz = document.getElementById('quizCon');
       let guide = document.getElementById('guideCon');
       quiz.remove();
       guide.hidden = false;

   }
},
[questionList, answerList]);

useEffect(()=>{
    if (currentQuestion < questionList.length){
        setQuestionIndex(currentQuestion);
    }
},
[currentQuestion, questionIndex, questionList]);

useEffect(()=>{
    if (dates != null)
    {
        let dateCon = document.getElementById('dateCon');
        console.log(dates)
        dateCon.hidden = true;
        let quiz = document.getElementById('quizCon');
        quiz.hidden = false;
    }

},
[dates]);



    return(

        <div className="pageCon">
            
        <div id='dateCon'>
            <DateSelector setDates={setDates}/>
        </div>

        <div hidden id='quizCon'>
            <QuizQuestion key={currentQuestion} question={questionList[questionIndex].phrase} questionType={questionList[questionIndex].type} answerList={answerList} setAnswerList={setAnswerList} currentQuestion ={currentQuestion} setCurrentQuestion ={setCurrentQuestion} />
        </div>
        <div hidden id='guideCon'>
            <p>Your itinerary is under construction</p>
            <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <Link to='/itinerary'> <button type="button" className="btn btn-primary">View Your Vacation Now!</button></Link>
        </div>

        </div>

    )
}
export default Quiz;