import { useState } from "react";

function QuizQuestion(props){

    const [answer, setAnswer] = useState('');

    let submitAnswer = () =>{
        console.log('submit answer clicked');
        let setAnswerList = props.setAnswer;
        let newlist = props.answerList.splice(0);
        newlist.push(answer)
        setAnswerList(newlist);
        let newCurrentQuestion = props.currentQuestion + 1;
        props.setCurrentQuestion(newCurrentQuestion);

    }

    return(
        <div className="questionCon card">
            <div className="card-header"><p>{props.question}</p></div>
            
            <div className="card-body">
            <input className="form-check-input quiz-question" onClick={()=> setAnswer('positive')} type="radio" value='positive' name={props.question}/>Love it
            <input className="form-check-input quiz-question" onClick={()=> setAnswer('neutral')} type="radio" value='neutral' name={props.question}/>It's fine
            <input className="form-check-input quiz-question" onClick={()=> setAnswer('negative')} type="radio" value='negative' name={props.question}/>Hate it
            <br/>
            <button className="btn btn-primary" onClick={submitAnswer}>Submit</button>
            </div>
        </div>
    )
}

export default QuizQuestion;