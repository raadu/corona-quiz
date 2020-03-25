import React, {Fragment} from "react";

const Result = ({score, playAgain}) => (
  <Fragment>
    <div className="score-board">
    {score>5 ? 
      <div className="score">অভিনন্দন! আপনি 10টির মধ্যে {score}টি সঠিক উত্তর দিতে পেরেছেন</div> :
      <div className="score">আপনি 10টির মধ্যে {score}টি সঠিক উত্তর দিতে পেরেছেন। করোনাভাইরাস নিয়ে আরো জ্ঞান অর্জন করা প্রয়োজন।</div>
    }
    </div>
    <div className="playAgain">
      <button className="playBtn" onClick={playAgain}>
        Play again!
      </button>
    </div>
  </Fragment>
); //end of Result func comp

export default Result;