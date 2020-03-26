import React, {Fragment} from "react";

const Result = ({score, playAgain}) => (
  <Fragment>
    <div className="score-board">
    {score>5 ? 
      <div className="score">
        <span className="winnerText">অভিনন্দন! </span> 
          আপনি 10টির মধ্যে {score}টি সঠিক উত্তর দিতে পেরেছেন</div> :
      <div className="score">আপনি 10টির মধ্যে {score}টি সঠিক উত্তর দিতে পেরেছেন। করোনাভাইরাস নিয়ে আরো জ্ঞান অর্জন করা প্রয়োজন।</div>
    }
    </div>
    <div className="info">
      করোনাভাইরাস নিয়ে বিশ্বস্ত ও সর্বশেষ তথ্য জানতে বিশ্ব স্বাস্থ্য সংস্থার 
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank" rel="noopener noreferrer"> ওয়েবসাইটে </a> 
          ভিসিট করুন
    </div>
    <div className="playAgain">
      <button className="playBtn" onClick={playAgain}>
        আবার খেলবো!
      </button>
    </div>
  </Fragment>
); //end of Result func comp

export default Result;