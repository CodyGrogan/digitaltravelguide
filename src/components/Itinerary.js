
function Itinerary(props){
    return(
        <div>
            <p>Itinerary will go here, populated by activity cards</p>
            <p>this is a response: {props.response[0].response}</p>
        </div>
    )
}

export default Itinerary;