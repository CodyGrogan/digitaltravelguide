import { useState } from "react";

function QuizQuestion(props){

    const [answer, setAnswer] = useState('');

    let submitAnswer = (response) =>{
        console.log('submit answer clicked');
        let id = props.question;
        let thisdiv = document.getElementById(id);
        thisdiv.className = 'fade-out';
        
        let newlist = props.answerList.slice(0);
        newlist.push(response)
        props.setAnswerList(newlist);
        let newCurrentQuestion = props.currentQuestion + 1;
        setTimeout(()=>{
            props.setCurrentQuestion(newCurrentQuestion);

        }, 1000 );
        console.log(props.answerList);

    }



    return(
        <div className="questionCon card" id={props.question}>
            <div className="card-header"><p>{props.question}</p></div>
            
            <div className="card-body">
            <button className="btn btn-success quiz-question" onClick={()=> submitAnswer('positive')} >Love it</button>
            <button className="btn btn-warning quiz-question" onClick={()=> submitAnswer('neutral')} >It's fine</button>
            <button className="btn btn-danger quiz-question" onClick={()=> submitAnswer('negative')}>Hate it</button>
            <br/>
            
            </div>
        </div>
    )
}

export default QuizQuestion;