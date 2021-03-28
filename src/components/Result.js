import PreviousGuessesList from './PreviousGuessesList';
import Feedback from './Feedback';

function Result(props) {
    return (
        <section className="results">
            <PreviousGuessesList previousGuesses={props.previousGuesses} />
            <Feedback
                numberIsGuessed={props.numberIsGuessed}
                feedbackText={props.feedbackText}
            />
        </section>
    );
}

export default Result;