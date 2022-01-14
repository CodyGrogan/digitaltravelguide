import QuizQuestion from "./QuizQuestion";
import { Link } from "react-router-dom";
import ActivityCard from "./AcitivityCard";
import activityList from "./activityList";
let newDate = new Date();
let gitimg = '/github.png'

function Home(props){

    return(
        <div className="pageCon defBackground">
            <h1>
                Welcome To Digital Travel Guide Taipei
            </h1> <div className="lineBreak"></div>
            <Link to='/quiz' ><button className="btn btn-primary">Plan your vacation!</button></Link>

            <div className="about">
            <a href='https://github.com/CodyGrogan/digitaltravelguide' target="_blank"><img src={gitimg} className='gitLink'  /> Cody Grogan</a>
            </div>
                   
        </div>
    )
}

export default Home;