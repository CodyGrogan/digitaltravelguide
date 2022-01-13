//this page should use a bootstrap container with 3 columns with sm breakpoints
//the cards will be displayed left to right
//every 2 rows in a full screen will be one day. each column being
//breakfast, morningactivity, lunch, noon activity, dinner, nightactivity

import ActivityCard from "./AcitivityCard";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';



function Itinerary(props){
    const [activityCards, setActivityCards] = useState()

    useEffect(()=>{
        let cards = props.getCards();
        setActivityCards(cards);
    }, [])
    
    return(
        <div className="pageCon itineraryPageBackground">
            
           
            {activityCards}
            <Link to={'/'}><button className="btn btn-warning homeBtn">Home</button></Link>
            
        </div>
    )
}

export default Itinerary;