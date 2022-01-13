
//this component will take props containing an activity and a date from the parent itinerary
//component. The date object will contain the calendar date for doing the activity


function ActivityCard(props){



    function getWeatherIcon(weather){
        console.log(weather);

        let icon;
        if (weather == 'Rain'){
            icon='../../weatherimg/rain.png'
        }
        else if (weather == 'Clouds'){
            icon='../../weatherimg/cloudy.png'
        }
        else if (weather == 'Clear'){
            icon='../../weatherimg/sunny.png'
        }
        else if (weather == 'Snow'){
            icon='../../weatherimg/snow.png'
        }
       
        return icon;

    }

    function displayDate(date) {
        let dd = date.getDate();
        let mm = date.getMonth()+1;
        let yyyy = date.getFullYear();
        if (dd<10){
            dd = '0' + dd;
        }
        if (mm < 10){
            mm = '0' + mm;
        }
        let dateString = `${yyyy}-${mm}-${dd}`;
        console.log(dateString);
        return dateString;
        
    }
    let weatherIcon = getWeatherIcon(props.weatherInfo);

    let dateString = displayDate(props.timeInfo.date);

    return(
        <div className="card activity">
            <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger day-num">
            Day {props.timeInfo.day} - <br/>{props.timeInfo.time}
            <span class="visually-hidden">Day Num - Time</span>
        </span>
           <div className="card-header ">
               <div className="container">
                   <div className="row">

                       <div className="col-sm">
                            Date: {dateString}
                       </div>
                       <div className="col-sm">
                            <h1>{props.obj.title}</h1>
                       </div>
                       <div className="col-sm">
                             <img id='weatherIcon' className="weatherIcon" src={weatherIcon}/>
                       </div>
                       

                       


                    </div>

               </div>
               </div>
           <div className="card-body">
                <div class="container" >
                    <div className="row sm">
                        <div className="col-sm">
                          <img className="activityImg" src={props.obj.img}/>  
                         </div>
                    
                         <div className="col-sm">
                            <h2>{props.obj.subtitle}</h2>
                            <p>{props.obj.address}</p>
                            <iframe className="mapIframe" title={props.obj.title}
                           
                            
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDh-IF0C5tIeY5SNTL62RsBkZS7dyeqWbQ
                                &q=${props.obj.lat},${props.obj.long}`}/>
                            
                         </div>

                    </div>
                    <div className="lineBreak"></div>
                    
                    
                    <div> {props.obj.body}</div>
                    

                </div>

            </div>

        </div>
    )
}

export default ActivityCard;