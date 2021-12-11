import Turn from "../assets/turn.png"


export default function CardQuestion (props) {
    return (
        <div className='cardPergunta'>
            <div>1/8</div>
            <div>Pergunta</div>
            <img onClick={() => props.setScreenQuestion(1)} src ={Turn} alt='virar'/>
        </div>
    )
}