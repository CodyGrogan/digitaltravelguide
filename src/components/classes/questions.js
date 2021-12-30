
class Question{
    constructor(type, content){
        this.content = content;
        this.type = type;
        this.phrase = this.createPhrase(content);

    }
    
    
    
      
     createPhrase(question){
        let phrases = [`Do you like ${question}?`, `How about  ${question}?`, `Do you fancy ${question}?`, `Is ${question} your jam?`, `You love ${question}, right?`, `is ${question} your cup of tea?`];
        console.log(phrases);
        let length = phrases.length;
        let ranNum = parseInt(getRandomArbitrary(0, length));
        console.log('rannum' + ranNum)
        let selectedPhrase = phrases[ranNum];
        console.log(selectedPhrase);
        return selectedPhrase;

    }

}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
export default Question;