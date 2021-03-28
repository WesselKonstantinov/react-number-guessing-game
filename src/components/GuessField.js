function GuessField(props) {
    return (
        <form className="guess-field" onSubmit={props.handleSubmit}>
            <input
                type="text"
                name="userGuess"
                placeholder="Enter a guess"
                className="guess-field__input"
                onChange={props.handleChange}
            />
            <button type="submit" className="guess-field__button">Submit guess</button>
        </form>
    )
}

export default GuessField;