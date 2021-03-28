function GuessField(props) {
    return (
        <form className="guess-field" onSubmit={props.handleSubmit}>
            <input
                type="text"
                name="userGuess"
                disabled={props.formIsDisabled}
                placeholder="Enter a guess"
                className="guess-field__input"
            />
            <button
                type="submit"
                className={`guess-field__button ${(props.formIsDisabled) && 'guess-field__button--disabled'}`}
                disabled={props.formIsDisabled}
            >Submit guess</button>
        </form>
    );
}

export default GuessField;