import Turn from "../assets/turn.png"


export default function CardQuestion (props) {
    return (
        <div className='cardQuestion card'>
            <div className='cardsTotal'>{props.index + 1}/{props.indexLength}</div>
            <div className='question'>{props.question}</div>
            <div className='turn'><img onClick={() => props.setScreenQuestion(1)} src ={Turn} alt='virar'/></div>
        </div>
    )
}