import { useState, useEffect } from "react";
import QuizQuestion from "./QuizQuestion";

function Quiz(props){

const [questionList, setQuestionList] = useState(['Do you like Spicy Food?', 'Do you like art galleries?', 'How about Sushi?', 'History museums?']);
const [answerList, setAnswerList] = useState([]);
const [currentQuestion, setCurrentQuestion] = useState(0);



    return(

        <div className="pageCon">
            <QuizQuestion key={currentQuestion} question={questionList[currentQuestion]} answerList={answerList} setAnswerList={setAnswerList} currentQuestion ={currentQuestion} setCurrentQuestion ={setCurrentQuestion}  />
        </div>
    )
}
export default Quiz;