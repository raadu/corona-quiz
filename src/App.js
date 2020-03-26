import React, {useState, useEffect} from 'react';
import './assets/style.scss';
import quizService from './quizService/index';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';

const App = () => {
  
  //States 
  const [questionBank, setQuestionBank] = useState([]);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState(0);

  //Load questions from the service
  const getQuestions = () => {
    quizService().then(question => {
      setQuestionBank(question);
    });
  }

  //Calculate scores
  const computeAnswer = (answer, correct) => {
      if(answer===correct) {
        setScore(score+1);
      }
      setResponses(responses<10 ? responses+1 : 10);
  }

  //Play Again button function
  const playAgain = () => {
    getQuestions();
    setScore(0);
    setResponses(0);
  }

  //Load questions on component mount
  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className="container">
      <div className="title">করোনা কুইজ</div>
      {questionBank.length>0 && responses<10 &&
       questionBank.map(({question, answers, correct, questionId})=> {
        return(
          <QuestionBox
            question={question}
            options={answers}
            key={questionId}
            selected={(answer) => computeAnswer(answer, correct)}
          />
        );
      })
      }
      {responses!==10 ? 
      <div className="footer">কুইজটি শেষ করতে সবগুলো প্রশ্নের উত্তর দিন</div> :
      null}
    
      {responses===10 ? 
      <Result score={score} 
         playAgain={playAgain} 
      /> : 
      null}
    </div>
  ); //end of return
} //end of App func comp

export default App;