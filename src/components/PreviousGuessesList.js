import ListItem from './ListItem';

function PreviousGuessesList() {
    return (
        <div>
            <p>Previous guesses: </p>
            <ul>
                <ListItem value="10" />
                <ListItem value="20" />
                <ListItem value="30" />
                <ListItem value="40" />
                <ListItem value="50" />
                <ListItem value="60" />
                <ListItem value="70" />
            </ul>
        </div>
    )
}

export default PreviousGuessesList;