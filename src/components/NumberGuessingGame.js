import React from 'react';
import Header from './Header';
import MainContent from './MainContent';

class NumberGuessingGame extends React.Component {
    render() {
        return (
            <div className="game">
                <Header />
                <MainContent />
            </div>
        )
    }
}

export default NumberGuessingGame;