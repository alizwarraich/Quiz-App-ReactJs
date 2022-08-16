import './home.css';

const Home = ({ setModal, setModal1 }) => {
    return (
        <div>
            <h1 className="heading">React Quiz App</h1>
            <div className='container'>
                <p className='desc'>In this quiz, you will be given 4 questions. Each question carries 1 mark. At the end of the quiz, your final score will be displayed. If you are ready, click on Start Quiz</p>
                <button className='startButton' onClick={() => { setModal(false); setModal1(true) }}>Start Quiz</button>
            </div>
        </div>
    )
}

export default Home
