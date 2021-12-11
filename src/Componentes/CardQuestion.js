import Turn from "../assets/turn.png"


export default function CardQuestion (props) {
    return (
        <div data-identifier="flashcard" className='cardQuestion card'>
            <div data-identifier="counter" className='cardsTotal'>{props.index + 1}/{props.indexLength}</div>
            <div className='question'>{props.question}</div>
            <div className='turn'><img data-identifier="arrow" onClick={() => props.setScreenQuestion(1)} src ={Turn} alt='virar'/></div>
        </div>
    )
}