import { type } from 'os'
import React from 'react'

type Props = {
    question :string;
    answers :string[];
    callback: any;
    userAnswer:any;
    questionNum: number;
    totalQuestion : number;

}


const Questioncard : React.FC<Props> = ({question ,answers ,callback, userAnswer ,questionNum ,totalQuestion}) => {
  return (
    <div>
       <p> question : {questionNum}/{totalQuestion}</p>
       <p dangerouslySetInnerHTML={{__html: question}} />
    <div>
        {answers.map(answer =>
        <div>
            <button disabled={userAnswer} value={answer} onClick={callback}> 
            <span dangerouslySetInnerHTML={{__html: answer}} />
            </button>
        </div> 
            )}


    </div>


    </div>
  )
}

export default Questioncard
