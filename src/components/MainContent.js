import React from 'react';
import Explanation from './Explanation';
import GuessField from './GuessField';
import Result from './Result';
import StartNewGameButton from './StartNewGameButton';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomNumber: Math.floor(Math.random() * 100) + 1,
            guessCount: 1,
            userGuess: '',
            feedbackText: '',
            previousGuesses: [],
            numberIsGuessed: false,
            formIsDisabled: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const userGuess = Number(e.target.userGuess.value);

        if (userGuess > this.state.randomNumber && this.state.guessCount < 10) {
            this.setState({ feedbackText: 'Wrong! You guessed too high!' });
        } else if (userGuess < this.state.randomNumber && this.state.guessCount < 10) {
            this.setState({ feedbackText: 'Wrong! You guessed too low!' });
        } else if (userGuess === this.state.randomNumber && this.state.guessCount <= 10) {
            this.setState({
                feedbackText: `Congratulations! It took you ${this.state.guessCount} ${this.state.guessCount === 1 ? 'guess' : 'guesses'}!`,
                numberIsGuessed: true,
                formIsDisabled: true
            });
        } else {
            this.setState({
                feedbackText: `Game over! The correct number was ${this.state.randomNumber}!`,
                formIsDisabled: true
            });
        }

        this.setState(prevState => {
            return {
                guessCount: prevState.guessCount + 1,
                userGuess: userGuess,
                previousGuesses: [...prevState.previousGuesses, userGuess]
            };
        });
        e.target.reset();
    }

    handleClick() {
        this.setState({
            randomNumber: Math.floor(Math.random() * 100) + 1,
            guessCount: 1,
            userGuess: '',
            previousGuesses: [],
            numberIsGuessed: false,
            formIsDisabled: false
        });
    }

    render() {
        return (
            <main className="game__main-section">
                <Explanation />
                <GuessField
                    handleSubmit={this.handleSubmit}
                    userGuess={this.state.userGuess}
                    formIsDisabled={this.state.formIsDisabled}
                />
                {
                    (this.state.previousGuesses.length === 0) ? null
                        : <Result
                            previousGuesses={this.state.previousGuesses}
                            numberIsGuessed={this.state.numberIsGuessed}
                            feedbackText={this.state.feedbackText}
                        />
                }
                {
                    (!this.state.formIsDisabled) ? null : <StartNewGameButton handleClick={this.handleClick} />
                }
            </main>
        );
    }
}

export default MainContent;