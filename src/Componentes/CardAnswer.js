export default function CardAnswer(props){
    return (
        <div className='cardAnswer'>
            <div>1/8</div>
            <div>Pergunta</div>
            <div>Resposta</div>
            <button onClick={() => props.setScreenQuestion(0)}>Aprendi agora</button>
            <button onClick={() => props.setScreenQuestion(0)}>Não lembrei</button>
            <button onClick={() => props.setScreenQuestion(0)}>Lembrei com esforço</button>
            <button onClick={() => props.setScreenQuestion(0)}>Zap!</button>
        </div>
    )
}