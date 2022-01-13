import ActivityCard from "./AcitivityCard";
import React, { useEffect, useState, useRef} from "react";
import {Link} from 'react-router-dom';
import ReactToPrint, { useReactToPrint } from "react-to-print";

const ItineraryList = React.forwardRef((props, ref) => (  <div  ref={ref} className="cardCon">   
 {props.cards}

 
  </div>
));


export default ItineraryList;