import {useState} from 'react';

function DateSelector(props){

    const maxDays = 3 //this number time 5 must be greater than total list of activities or else it will crash since activities cannot be repeated

    //get current date to set minimum
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() +1;
    let yyyy = today.getFullYear();
    
    if (dd<10){
        dd = '0' + dd;
    }
    if (mm < 10){
        mm = '0' + mm;
    }
    today = `${yyyy}-${mm}-${dd}`;

    
    let defDate = nextDay(today);
    let defMaxDate = getMaxEndDate(defDate);

    const [minEnd, setMinEnd] = useState(defDate);
    const [maxEnd, setMaxEnd] = useState(defMaxDate);


    
   

  function returnDates(){
        let start = document.getElementById('start').value;
        let end = document.getElementById('end').value;
        let startDate = new Date(start);
        let endDate = new Date(end);
        let startDateMs = startDate.getTime();
        let endDateMs = endDate.getTime();
        if (endDateMs > startDateMs){
            props.setDates({start: start, end: end});
        console.log('dates returned');

        }
        else{
            alert('End date must be after start date')
        }

        

    }

    function setEndDate(){
        console.log('setEndMin fired')
        let startDateString = document.getElementById('start').value;
        let minend = nextDay(startDateString);
        let maxdate =getMaxEndDate(minend);
        setMinEnd(minend);
        setMaxEnd(maxdate);
       

        
    }

    function nextDay(startDateString){
        let startDate = new Date(startDateString);
        let endDate = new Date(startDate);
        endDate.setDate(startDate.getDate()+1);
        let dd = endDate.getDate();
        let mm = endDate.getMonth()+1;
        let yyyy = endDate.getFullYear();
        if (dd<10){
            dd = '0' + dd;
        }
        if (mm < 10){
            mm = '0' + mm;
        }
        let minEndDate = `${yyyy}-${mm}-${dd}`;
        console.log(minEndDate);
        return minEndDate;
    

    }
    
    

    function getMaxEndDate(endDateString){
        let endDate = new Date(endDateString);
        let maxDate = new Date(endDateString);
        maxDate.setDate(endDate.getDate()+maxDays);
        let dd = maxDate.getDate();
        let mm = maxDate.getMonth()+1;
        let yyyy = maxDate.getFullYear();
        if (dd<10){
            dd = '0' + dd;
        }
        if (mm < 10){
            mm = '0' + mm;
        }
        let maxEndDate = `${yyyy}-${mm}-${dd}`;
        console.log(maxEndDate);
        return maxEndDate;
    

    }
    
    return(
        <div>

        <label htmlFor="start">Start Date</label> 
       <div className="lineBreak"></div> 
       <input onChange={setEndDate} id='start' name="start" type="date" className="date-input form-control" min={today}/>
       <div className="lineBreak"></div> 
       <label htmlFor="end">End Date</label>
       <div className="lineBreak"></div> 
       <input id='end' name='end' type="date" className="date-input form-control" min={minEnd} max={maxEnd}/>
       <div className="lineBreak"></div> 
       
       <button type="button" className="btn btn-primary" onClick={()=> returnDates()}>Submit</button>


        </div>
    )
}

export default DateSelector;