import QuizQuestion from "./QuizQuestion";

function Home(props){

    return(
        <div>
            <h1>
                Welcome To Digital Travel Guide Taipei
            </h1>
            <button className="btn btn-primary">Plan your vacation!</button>
            <QuizQuestion question={'Do you like Spicy Food?'}/>
            
           
        </div>
    )
}

export default Home;