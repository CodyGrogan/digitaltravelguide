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
    const [activityCards, setActivityCards] = useState();
    const [textList, setTextList] = useState();

    useEffect(()=>{
        let cards = props.getCards();
        setActivityCards(cards);
        let text = props.getText();
        setTextList(text);
    }, []);

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    
    return(
        <div className="itenPageCon itineraryPageBackground">
            

            {activityCards}
            <div style={{ display: "none" }}>
            <ItineraryList  cards={textList} ref={componentRef}/>
            </div>
           
            <button className="btn btn-primary homeBtn" onClick={handlePrint}>Print your Itinerary!</button>
            <Link to={'/'}><button className="btn btn-warning homeBtn">Reset</button></Link>

            
            
        </div>
    )
}

export default Itinerary;