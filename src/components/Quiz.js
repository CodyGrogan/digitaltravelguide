import { useState, useEffect } from "react";
import QuizQuestion from "./QuizQuestion";
import DateSelector from "./DateSelector";

function Quiz(props){

const [questionList, setQuestionList] = useState(['Do you like Spicy Food?', 'Do you like art galleries?', 'How about Sushi?', 'History museums?']);
const [answerList, setAnswerList] = useState([]);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [dates, setDates] = useState(null);
console.log(dates);

useEffect(()=>{
   if (questionList.length == answerList.length){
       console.log(answerList);
       let quiz = document.getElementById('quizCon');
       let guide = document.getElementById('guideCon');
       quiz.hidden = true;
       guide.hidden = false;

   }
},
[questionList, answerList]);

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
            <QuizQuestion key={currentQuestion} question={questionList[currentQuestion]} answerList={answerList} setAnswerList={setAnswerList} currentQuestion ={currentQuestion} setCurrentQuestion ={setCurrentQuestion}  />
        </div>
        <div hidden id='guideCon'>
            <p>Your itinerary is under construction</p>
            <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
        </div>

        </div>

    )
}
export default Quiz;