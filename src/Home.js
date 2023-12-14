import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {
    return (
        <>
        <Header />
        <main>
        <section className="home-section">
            <h2><b>So you think you know ReactJS?</b> Take the 10 quizzes below to test your knowledge.</h2>
            <div className="two-cols">
            <div>
            <p><b>1</b> - &nbsp;Functional Components  <Link to="/quiz-questions/1">Start</Link> </p>
            <p><b>2</b> - &nbsp;Parent Component <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>3</b> - &nbsp;Functional Component <Link to="/quiz-questions/1">Start</Link> </p>
            <p><b>4</b> - &nbsp;Key prop in React <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>5</b> - &nbsp;React Component <Link to="/quiz-questions/1">Start</Link> </p>
            </div>
            <div>
            <p><b>6</b> - &nbsp;Plain JavaScript <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>7</b> - &nbsp;Children prop in React <Link to="/quiz-questions/1">Start</Link> </p>
            <p><b>8</b> - &nbsp;Side effects in a functional component <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>9</b> - &nbsp;Functional component <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>10</b> - &nbsp;defaultProps <Link to="/quiz-questions/2">Start</Link> </p>
            </div>
            </div>

        </section>
        </main>
        <Footer />
        </>
    );
}   

export default App;