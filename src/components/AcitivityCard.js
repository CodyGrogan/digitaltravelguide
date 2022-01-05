


//this component will take props containing an activity and a date from the parent itinerary
//component. The date object will contain the calendar date for doing the activity


function ActivityCard(props){
    return(
        <div className="card activity">
            <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger day-num">
            Day - Time
            <span class="visually-hidden">Day Num - Time</span>
        </span>
           <div className="card-header ">
               <div className="container">
                   <div className="row">

                       <div className="col-sm">
                            Date
                       </div>
                       <div className="col-sm">
                            <h1>{props.obj.title}</h1>
                       </div>
                       <div className="col-sm">
                            Weather
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