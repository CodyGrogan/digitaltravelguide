//this page should use a bootstrap container with 3 columns with sm breakpoints
//the cards will be displayed left to right
//every 2 rows in a full screen will be one day. each column being
//breakfast, morningactivity, lunch, noon activity, dinner, nightactivity

import ActivityCard from "./AcitivityCard";
import { useEffect, useState, useRef} from "react";
import {Link} from 'react-router-dom';
import ReactToPrint, { useReactToPrint } from "react-to-print";
import ItineraryList from "./ItineraryList";



function Itinerary(props){
    const [activityCards, setActivityCards] = useState()

    useEffect(()=>{
        let cards = props.getCards();
        setActivityCards(cards);
    }, []);

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    
    return(
        <div className="itenPageCon itineraryPageBackground">
            
            <ItineraryList cards={activityCards} ref={componentRef}/>
            
           
            <button className="btn btn-primary" onClick={handlePrint}>Print your Itinerary!</button>
            <Link to={'/'}><button className="btn btn-warning homeBtn">Home</button></Link>

            
            
        </div>
    )
}

export default Itinerary;