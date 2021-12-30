import Question from "./classes/questions";


// this will contain the list of question objects for the quiz
// valid types are: art, history, religion, spicy, japanese food, chinese food, sichuanese food, cats, hiking, parks, site seeing, night life. 


let arrContent = ['Do you like Spicy Food?', 'Do you like art galleries?', 'How about Sushi?', 'History museums?']

let questionObjArr = [new Question('spicy', 'spicy food'), new Question('art', 'art galleries'), new Question('japanese food', 'sushi'), new Question('history', 'history museums')];


export default questionObjArr;
console.log(questionObjArr[0]);