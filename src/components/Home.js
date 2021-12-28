import QuizQuestion from "./QuizQuestion";
import { Link } from "react-router-dom";

function Home(props){

    return(
        <div className="pageCon">
            <h1>
                Welcome To Digital Travel Guide Taipei
            </h1>
            <Link to='/quiz' ><button className="btn btn-primary">Plan your vacation!</button></Link>
            
            
           
        </div>
    )
}

export default Home;