


function TextList(props){

    let title = props.obj.title;
    let subtitle =  props.obj.subtitle;
    let address = props.obj.address;
    let body = props.obj.body;


    return(
        <div className='textList'>
            <p> Day {props.timeInfo.day} - <br/>{props.timeInfo.time}</p>
            <h2>{title}</h2><br/>
            <h3>{subtitle}</h3><br/>
            <p>{address}</p><br/>
            <p>{body}</p><br/>
            
            

        </div>
    );
}

export default TextList