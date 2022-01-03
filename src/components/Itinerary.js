//this page should use a bootstrap container with 3 columns with sm breakpoints
//the cards will be displayed left to right
//every 2 rows in a full screen will be one day. each column being
//breakfast, morningactivity, lunch, noon activity, dinner, nightactivity

import ActivityCard from "./AcitivityCard";






function Itinerary(props){
    return(
        <div>
            <p>Itinerary will go here, populated by activity cards</p>
            <p>this is a response: {props.response[0].response}</p>
            
        </div>
    )
}

export default Itinerary;