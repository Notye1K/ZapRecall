export default function CardAnswer(props){
    return (
        <div className='cardAnswer'>
            <div>{props.index + 1}/{props.indexLength}</div>
            <div>{props.question}</div>
            <div>{props.answer}</div>
            <button onClick={() => onClick(props)}>Aprendi agora</button>
            <button onClick={() => {onClick(props); props.setFailure(1)}}>Não lembrei</button>
            <button onClick={() => onClick(props)}>Lembrei com esforço</button>
            <button onClick={() => onClick(props)}>Zap!</button>
        </div>
    )
}

function onClick(props){
    props.setScreenQuestion(0)
    props.index +1 === props.indexLength ? props.setResult(1) : props.setIndex(props.index + 1)
}