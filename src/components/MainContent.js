import Explanation from './Explanation';
import GuessField from './GuessField';
import PreviousGuessesList from './PreviousGuessesList';
import Feedback from './Feedback';
import StartNewGameButton from './StartNewGameButton';

function MainContent() {
    return (
        <main>
            <Explanation />
            <GuessField />
            <PreviousGuessesList />
            <Feedback />
            <StartNewGameButton />
        </main>
    )
}

export default MainContent;