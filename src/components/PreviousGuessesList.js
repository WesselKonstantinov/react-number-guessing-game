import ListItem from './ListItem';

function PreviousGuessesList() {
    return (
        <section className="previous-guesses">
            <h2 className="previous-guesses__heading">Previous guesses: </h2>
            <ul className="previous-guesses__list">
                <ListItem value="10" />
                <ListItem value="20" />
                <ListItem value="30" />
                <ListItem value="40" />
                <ListItem value="50" />
                <ListItem value="60" />
                <ListItem value="70" />
                <ListItem value="80" />
                <ListItem value="90" />
                <ListItem value="100" />
            </ul>
        </section>
    )
}

export default PreviousGuessesList;