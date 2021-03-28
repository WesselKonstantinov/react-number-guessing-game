import React from 'react';
import Explanation from './Explanation';
import GuessField from './GuessField';
import PreviousGuessesList from './PreviousGuessesList';
import Feedback from './Feedback';
import StartNewGameButton from './StartNewGameButton';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomNumber: Math.floor(Math.random() * 100) + 1,
            guessCount: 1,
            userGuess: '',
            previousGuesses: [],
            numberIsGuessed: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: Number(value)
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        e.target.reset();
        const userGuess = this.state.userGuess;
        this.setState(prevState => {
            return {
                guessCount: prevState.guessCount + 1,
                previousGuesses: [...prevState.previousGuesses, userGuess],
                userGuess: ''
            };
        });
    }

    handleClick() {
        this.setState({
            randomNumber: Math.floor(Math.random() * 100) + 1,
            guessCount: 1,
            userGuess: '',
            previousGuesses: [],
            numberIsGuessed: false
        });
    }

    render() {
        return (
            <main className="game__main-section">
                <Explanation />
                <GuessField
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    userGuess={this.state.userGuess}
                />
                {(this.state.previousGuesses.length === 0) ? null : <PreviousGuessesList previousGuesses={this.state.previousGuesses} />}
                <Feedback numberIsGuessed={this.state.numberIsGuessed} />
                <StartNewGameButton handleClick={this.handleClick} />
            </main>
        )
    }
}

export default MainContent;