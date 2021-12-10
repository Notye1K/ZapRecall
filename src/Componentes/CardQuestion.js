import Turn from "./assets/turn.png"


export default function CardQuestion () {
    return (
        <div className='cardPergunta'>
            <div>1/8</div>
            <div>Pergunta</div>
            <img src ={Turn} alt='virar'/>
        </div>
    )
}