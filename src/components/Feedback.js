function Feedback(props) {
    return <p className={`results__feedback ${props.numberIsGuessed ? 'results__feedback--correct'
        : 'results__feedback--incorrect'}`}>{props.feedbackText}</p>;
}

export default Feedback;