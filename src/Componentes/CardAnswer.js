import { useState } from "react"
import Turn from "../assets/turn.png"


export default function CardAnswer(props){
    const [border, setBorder] = useState('')

    return (
        <div data-identifier="flashcard" className={`cardAnswer card ${border}`}>
            <div className='topContainer'>
                <div className='question'>{props.question}</div>
                <div data-identifier="counter" className='cardsTotal'>{props.index + 1}/{props.indexLength}</div>
            </div>
            <div className='answer'>{props.answer}</div>
            {border === '' ? (
            <div className='buttons'>
                <button className='aprendi' onClick={() => setBorder('aprendi')}>Aprendi agora</button>
                <button className='failure' onClick={() => {setBorder('failure'); props.setFailure(1)}}>Não lembrei</button>
                <button className='lembrei' onClick={() => setBorder('lembrei')}>Lembrei com esforço</button>
                <button className='zap' onClick={() => setBorder('zap')}>Zap!</button>
            </div>):(
                <div className='turn'><img data-identifier="arrow" onClick={() => onClick(props, setBorder)} src ={Turn} alt='virar'/></div>
            )}
        </div>
    )
}

function onClick(props, setBorder){
    setBorder('')
    props.setScreenQuestion(0)
    props.index +1 === props.indexLength ? props.setResult(1) : props.setIndex(props.index + 1)
}