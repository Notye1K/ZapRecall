import Turn from "../assets/turn.png"


export default function CardQuestion (props) {
    return (
        <div className='cardPergunta'>
            <div>{props.index + 1}/{props.indexLength}</div>
            <div>{props.question}</div>
            <img onClick={() => props.setScreenQuestion(1)} src ={Turn} alt='virar'/>
        </div>
    )
}