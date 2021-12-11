export default function CardAnswer(props){
    return (
        <div className='cardAnswer card'>
            <div className='topContainer'>
                <div className='question'>{props.question}</div>
                <div className='cardsTotal'>{props.index + 1}/{props.indexLength}</div>
            </div>
            <div className='answer'>{props.answer}</div>
            <div className='buttons'>
                <button className='aprendi' onClick={() => onClick(props)}>Aprendi agora</button>
                <button className='failure' onClick={() => {onClick(props); props.setFailure(1)}}>Não lembrei</button>
                <button className='lembrei' onClick={() => onClick(props)}>Lembrei com esforço</button>
                <button className='zap' onClick={() => onClick(props)}>Zap!</button>
            </div>
        </div>
    )
}

function onClick(props){
    props.setScreenQuestion(0)
    props.index +1 === props.indexLength ? props.setResult(1) : props.setIndex(props.index + 1)
}