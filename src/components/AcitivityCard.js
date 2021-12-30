
function ActivityCard(props){
    return(
        <div className="card activity">
            <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger day-num">
            Day num
            <span class="visually-hidden">Day Num</span>
        </span>
           <div className="card-header ">
               <div className="container">
                   <div className="row">

                       <div className="col-sm">
                            Date
                       </div>
                       <div className="col-sm">
                            <h1>title</h1>
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
                            <p>Image goes Left on PC</p>
                         </div>
                    
                         <div className="col-sm">
                            <p>Subtitle</p>
                         </div>

                    </div>
                    <div className="lineBreak"></div>
                    <p>Address</p> 
                    
                    <div> Card Body Text</div>
                    <div>Google Maps container</div>

                </div>

            </div>

        </div>
    )
}

export default ActivityCard;