
function ProgressBar(props){
    let question = props.currentQuestion + 1;
    let width = question/props.totalQuestions;
    width = width*100;
    return(
    <div id='inputProgressBar' class="progress">
        <div class="progress-bar bar-text" role="progressbar" style={{width: `${width}%` }} aria-valuenow={`100`} aria-valuemin="10" aria-valuemax='100'></div>
    </div>
    )
}

export default ProgressBar;