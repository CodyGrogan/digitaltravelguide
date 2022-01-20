import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";


function QuizQuestion(props){

    const [answer, setAnswer] = useState('');
    const [phrase, setPhrase] = useState('');
    
    

    let submitAnswer = (response) =>{
        console.log('submit answer clicked');
        
        let responseObj = {type: props.questionType, response: response};
        let id = props.question;
        let thisdiv = document.getElementById(id);
        let realbtn = document.getElementById('realbtn');
        realbtn.hidden = true;
        let fakebtn = document.getElementById('fakebtn');
        fakebtn.hidden = false;
        thisdiv.className = 'fade-out';
        
        let newlist = props.answerList.slice(0);
        newlist.push(responseObj)
        props.setAnswerList(newlist);
      
        let newCurrentQuestion = props.currentQuestion + 1;
        
        setTimeout(()=>{
            props.setCurrentQuestion(newCurrentQuestion);

        }, 500 );
        console.log(props.answerList);
     

    }



    return(
        <div className="questionCon card" id={props.question}>
            <div className="card-header"><p>{props.question}</p></div>
            
            <div className="card-body">
            <div id='realbtn'>
                <button className="btn btn-success quiz-question" onClick={()=> submitAnswer('positive')} >Love it</button>
                <button className="btn btn-warning quiz-question" onClick={()=> submitAnswer('neutral')} >It's fine</button>
                <button className="btn btn-danger quiz-question" onClick={()=> submitAnswer('negative')}>Hate it</button>
                </div>
            
            <div id='fakebtn' hidden>
                <button className="btn btn-success quiz-question" >Love it</button>
                <button className="btn btn-warning quiz-question" >It's fine</button>
                <button className="btn btn-danger quiz-question" >Hate it</button>
            </div>
            <br/>
            <div>
                <ProgressBar currentQuestion={props.currentQuestion} totalQuestions={props.totalQuestions} />
            </div>
            
            </div>
        </div>
    )
}

export default QuizQuestion;