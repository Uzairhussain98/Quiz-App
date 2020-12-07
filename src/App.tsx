import React , {useState} from 'react';
import Questioncard from './components/Questioncard'
import {fetchQuestions ,Difficulty} from './API'

const TOTAL_QUESTIONS = 10 ;

function App() {

  const [loading , setLoading ] = useState(false);
  const [questions,setQuestions ] = useState([]);
  const [number , setNumber ] = useState(0);
  const [userAnswer , setuserAnswer ] = useState([]);
  const [ score , setScore ] = useState(0);
  const [ gameover , setGameover ] = useState(true);

  console.log(fetchQuestions(TOTAL_QUESTIONS , Difficulty.EASY ));

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {} ;


  const Startquiz = async() => {}
  const Next = async() => {}


  return (
    <div className="App">
  <h1>Quiz App</h1>

  <button className="start__quiz" onClick={Startquiz}>Begin Quiz</button>
    <h3>Score :</h3>

    <p>
      Loading
    </p>
    {/* <Questioncard
    questionNum ={number +1 }
    totalQuestion = {TOTAL_QUESTIONS}
    question = {questions[number].question}
    answers = {questions[number].answers}
    userAnswer = {userAnswer ? userAnswer[number] : undefined}
    callback= {checkAnswer}

    /> */}

    <button className="next__q" onClick={Next} >Next</button>


    </div>
  );
}

export default App;
