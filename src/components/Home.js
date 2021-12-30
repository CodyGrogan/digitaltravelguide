import QuizQuestion from "./QuizQuestion";
import { Link } from "react-router-dom";
import ActivityCard from "./AcitivityCard";

function Home(props){

    return(
        <div className="pageCon">
            <h1>
                Welcome To Digital Travel Guide Taipei
            </h1> <div className="lineBreak"></div>
            <Link to='/quiz' ><button className="btn btn-primary">Plan your vacation!</button></Link>
            
            <ActivityCard/>
           
        </div>
    )
}

export default Home;