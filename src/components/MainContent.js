import Explanation from './Explanation';
import GuessField from './GuessField';
import PreviousGuessesList from './PreviousGuessesList';
import Feedback from './Feedback';

function MainContent() {
    return (
        <main>
            <Explanation />
            <GuessField />
            <PreviousGuessesList />
            <Feedback />
        </main>
    )
}

export default MainContent;