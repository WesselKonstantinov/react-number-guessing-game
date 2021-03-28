import ListItem from './ListItem';

function PreviousGuessesList(props) {
    const previousGuesses = props.previousGuesses;
    const listItems = previousGuesses.map((previousGuess, index) => <ListItem key={index} value={previousGuess} />)

    return (
        <>
            <h2 className="results__heading">Previous guesses: </h2>
            <ul className="results__list">{listItems}</ul>
        </>
    )
}

export default PreviousGuessesList;