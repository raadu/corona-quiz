import React, {useState} from 'react';

const QuestionBox = ({question, options, selected}) => {
    
    //States 
    const [answer, setAnswer] = useState(options);
    const [isSelected, setIsSelected] = useState(false);

    //Function call when answer is selected
    const selectAnswer = (text) => {
        setAnswer([text]);
        selected(text);
        setIsSelected(true);
    }

    return (
        <div className="questionBox">
            <div className="question">
                {question}
            </div>
            {answer.map((text, index)=>{
                return(
                    <button className={isSelected===false ? "answerBtn" : "answerBtn_selected"} 
                        key={index}
                        onClick={()=>selectAnswer(text)}>
                            {text}
                    </button>
                );
            })
            }
        </div>
    ); //end of return
} //end of QuestionBox func comp
 
export default QuestionBox;