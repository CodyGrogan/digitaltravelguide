//this page should use a bootstrap container with 3 columns with sm breakpoints
//the cards will be displayed left to right
//every 2 rows in a full screen will be one day. each column being
//breakfast, morningactivity, lunch, noon activity, dinner, nightactivity

import ActivityCard from "./AcitivityCard";
import { useEffect, useState } from "react";




function Itinerary(props){
    const [activityCards, setActivityCards] = useState()

    useEffect(()=>{
        let cards = props.getCards();
        setActivityCards(cards);
    }, [])
    
    return(
        <div className="pageCon">
            <p>Itinerary will go here, populated by activity cards</p>
           
            {activityCards}
            
        </div>
    )
}

export default Itinerary;