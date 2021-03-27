import ListItem from './ListItem';

function PreviousGuessesList(props) {
    const previousGuesses = props.previousGuesses;
    const listItems = previousGuesses.map((previousGuess, index) => <ListItem key={index} value={previousGuess} />)

    return (
        <section className="previous-guesses">
            <h2 className="previous-guesses__heading">Previous guesses: </h2>
            <ul className="previous-guesses__list">{listItems}</ul>
        </section>
    )
}

export default PreviousGuessesList;