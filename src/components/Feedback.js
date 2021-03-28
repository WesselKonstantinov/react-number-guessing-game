function Feedback(props) {
    return <p className={props.numberIsGuessed ? 'game__feedback game__feedback--correct' : 'game__feedback game__feedback--incorrect'}></p>
}

export default Feedback;