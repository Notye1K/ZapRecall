export default function FlashCard() {
    return (
        <div className='flashCard'>
            <img src ='assets/logo-mini.png' alt='logo-mini'/>
            <CardQuestion/>
            <CardAnswer/>
        </div>
    )
}

function CardQuestion () {
    return (
        <div className='cardPergunta'>
            <div>1/8</div>
            <div>Pergunta</div>
            <img src ='assets/turn.png' alt='virar'/>
        </div>
    )
}

function CardAnswer(){
    return (
        <div className='cardAnswer'>
            <div>1/8</div>
            <div>Pergunta</div>
            <div>Resposta</div>
            <button>Aprendi agora</button>
            <button>Não lembrei</button>
            <button>Lembrei com esforço</button>
            <button>Zap!</button>
        </div>
    )
}