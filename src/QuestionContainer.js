// QuestionContainer component
import React, { useState } from 'react';
import Question from './Question';
import './styles.css'; // import the CSS file here

function QuestionContainer() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const questionIds = ['AreaUnderTheCurve_901', 'BinomialTheorem_901', 'DifferentialCalculus2_901'];

  function nextQuestion() {
    setQuestionIndex((questionIndex + 1) % questionIds.length);
  }

  function prevQuestion() {
    setQuestionIndex((questionIndex - 1 + questionIds.length) % questionIds.length);
  }

  return (
    <div className="question-container">
      <h1 className="question-title">Mathematics Questions</h1>
      <div className="question-header">
        Question {questionIndex + 1}
      </div>
      <Question questionId={questionIds[questionIndex]} />
      <div className="question-navigation">
        <button className="question-button" onClick={prevQuestion}>Previous</button>
        <button className="question-button" onClick={nextQuestion}>Next</button>
      </div>
    </div>
  );
}

export default QuestionContainer;
