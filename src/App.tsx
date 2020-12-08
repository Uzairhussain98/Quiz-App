import React , {useState} from 'react';
import Questioncard from './components/Questioncard'
import {fetchQuestions ,Difficulty , QuestionState} from './API'

const TOTAL_QUESTIONS = 10 ;

type AnswerObject ={
   question : string  ;
   answer:    string   ;
   correct :  boolean   ;
   correctAnswer : string;

}



function App() {

  const [loading , setLoading ] = useState(false);
  const [questions,setQuestions ] = useState<QuestionState[]>([]);
  const [number , setNumber ] = useState(0);
  const [userAnswer , setuserAnswer ] = useState<AnswerObject[]>([]);
  const [ score , setScore ] = useState(0);
  const [ gameover , setGameover ] = useState(true);

  console.log(questions);

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {} ;


  const Startquiz = async() => {
    setLoading(true);
    setGameover(false);
    const newQuestion = await fetchQuestions(TOTAL_QUESTIONS , Difficulty.EASY);
    setQuestions(newQuestion);
    setScore(0);
    setuserAnswer([]);
    setLoading(false);



  };
  const Next = async() => {}


  return (
    <div className="App">
  <h1>Quiz App</h1>
{ gameover || userAnswer.length === TOTAL_QUESTIONS ? (
  <button className="start__quiz" onClick={Startquiz}>Begin Quiz</button>
) : null }
{!gameover ? (
    <h3>Score :</h3> ) : null
} 
  { loading ?
    <p>
      Loading
    </p> : null
}
{!loading && !gameover ? (
    <Questioncard
    questionNum ={number +1 }
    totalQuestion = {TOTAL_QUESTIONS}
    question = {questions[number].question}
    answers = {questions[number].answers}
    userAnswer = {userAnswer ? userAnswer[number] : undefined}
    callback= {checkAnswer}

    /> ) : null
}
{!gameover && !loading && userAnswer.length === number  + 1 && number!= TOTAL_QUESTIONS -1 ? 
    <button className="next__q" onClick={Next} >Next</button>
    : null
}

    </div>
  );
}

export default App;
