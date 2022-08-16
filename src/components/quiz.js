import './quiz.css';
import questions from '../context/data';
import { useState } from 'react';

const Quiz = ({ setModal1, setModal2, getScore }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(1);
    function handleAnswerOptionClick(status) {
        if (status) {
            setScore(score + 1)
        }
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
        }
        else {
            setModal1(false)
            setModal2(true)
            getScore(score)
        }
    }
    return (
        <div className='grid'>
            <div className='question-section'>
                <div className='question-count'>
                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                    <button className='button' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
            </div>
        </div>
    )
}

export default Quiz
