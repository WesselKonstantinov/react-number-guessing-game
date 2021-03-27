function GuessField() {
    return (
        <form className="guesss-field">
            <input type="text" placeholder="Enter a guess" className="guess-field__input" />
            <button className="guess-field__button">Submit guess</button>
        </form>
    )
}

export default GuessField;