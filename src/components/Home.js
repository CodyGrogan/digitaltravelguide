import QuizQuestion from "./QuizQuestion";
import { Link } from "react-router-dom";
import ActivityCard from "./AcitivityCard";
import Taipei101 from "./activityList";
let obj = Taipei101;


function Home(props){

    return(
        <div className="pageCon">
            <h1>
                Welcome To Digital Travel Guide Taipei
            </h1> <div className="lineBreak"></div>
            <Link to='/quiz' ><button className="btn btn-primary">Plan your vacation!</button></Link>
            
            <ActivityCard obj={obj} />
           
        </div>
    )
}

export default Home;