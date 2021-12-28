import { useState } from "react";

function QuizQuestion(props){

    const [answer, setAnswer] = useState('');

    return(
        <div className="questionCon">
            <p>{props.question}</p>
            
            <input className="form-check-input quiz-question" onClick={()=> setAnswer('positive')} type="radio" value='positive' name={props.question}/>Love it
            <input className="form-check-input quiz-question" onClick={()=> setAnswer('neutral')} type="radio" value='neutral' name={props.question}/>It's fine
            <input className="form-check-input quiz-question" onClick={()=> setAnswer('negative')} type="radio" value='negative' name={props.question}/>Hate it
            <br/>
            <button className="btn btn-primary">Submit</button>
        </div>
    )
}

export default QuizQuestion;