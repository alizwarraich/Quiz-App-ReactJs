import './score.css';
import questions from '../context/data';

const Score = ({ score }) => {
    return (
        <div className='scoreContainer'>
            <p className='scoreText'>You have score {score} out of {questions.length}</p>
        </div>
    )
}

export default Score
