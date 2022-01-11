import QuizQuestion from "./QuizQuestion";
import { Link } from "react-router-dom";
import ActivityCard from "./AcitivityCard";
import activityList from "./activityList";
let obj = activityList[0];
let newDate = new Date();
let dateInfo = {date: newDate, day: 1, time: 'Morning'}

function Home(props){

    return(
        <div className="pageCon defBackground">
            <h1>
                Welcome To Digital Travel Guide Taipei
            </h1> <div className="lineBreak"></div>
            <Link to='/quiz' ><button className="btn btn-primary">Plan your vacation!</button></Link>
            <ActivityCard obj={obj} timeInfo={dateInfo} weatherInfo={'Snow'}  />
                   
        </div>
    )
}

export default Home;