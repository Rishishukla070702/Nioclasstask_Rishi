// Question component
import React, { useState, useEffect } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

function Question({ questionId }) {
  const [question, setQuestion] = useState('');

  useEffect(() => {
    async function fetchQuestion() {
      const response = await fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${questionId}`);
      const data = await response.json();
      setQuestion(data[0].Question);
    }

    fetchQuestion();
  }, [questionId]);

  return (
    <div className="question">
      <MathJaxContext>
        <MathJax>{question}</MathJax>
      </MathJaxContext>
    </div>
  );
}

export default Question;
