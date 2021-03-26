import Explanation from './Explanation';
import GuessField from './GuessField';
import PreviousGuessesList from './PreviousGuessesList';

function MainContent() {
    return (
        <main>
            <Explanation />
            <GuessField />
            <PreviousGuessesList />
        </main>
    )
}

export default MainContent;