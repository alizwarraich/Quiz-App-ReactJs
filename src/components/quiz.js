import './quiz.css';
import questions from '../context/data';
import { useState } from 'react';

const Quiz = ({ setModal1, setModal2, getScore }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    function handleAnswerOptionClick(status) {
        if (status) {
            setScore(score => score + 1)
        }
        currentQuestion + 1 < questions.length ?
            setCurrentQuestion(currentQuestion + 1) : (function () {
                getScore(score)
                setModal1(false)
                setModal2(true)
            }())
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
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                    <button key={index} className='button' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
            </div>
        </div>
    )
}

export default Quiz
