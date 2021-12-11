import CardQuestion from "./CardQuestion"
import CardAnswer from "./CardAnswer"
import LogoMini from "../assets/logo-mini.png"
import { useState } from "react"

export default function FlashCard(props) {
    const data = [{question:"O que é JSX?", answer:"Uma extensão de linguagem do JavaScript"}, {question:"O React é ___", answer:"uma biblioteca JavaScript para construção de interfaces"},
    {question:"Componentes devem iniciar com ___", answer:" letra maiúscula"}, {question:"Podemos colocar __ dentro do JSX", answer:"expressões"},
    {question:"O ReactDOM nos ajuda __", answer:"interagindo com a DOM para colocar componentes React na mesma"}, {question:"Usamos o npm para __ ", answer:"gerenciar os pacotes necessários e suas dependências"},
    {question:"Usamos props para __", answer:"passar diferentes informações para componentes "}, {question:"Usamos estado (state) para __ ", answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}]

    const [screenQuestion, setScreenQuestion] = useState(0)
    const [index, setIndex] = useState(0)


    return (
        <div className='flashCard'>
            <img src ={LogoMini} alt='logo-mini'/>
            {/* {data.map((i) => screenQuestion === 0 ? <CardQuestion question={i.question} setScreenQuestion = {setScreenQuestion}/> : <CardAnswer answer={i.answer} setScreenQuestion = {setScreenQuestion}/>)} */}
            {screenQuestion === 0 ? <CardQuestion index={index} indexLength={data.length} question={data[index].question} setScreenQuestion = {setScreenQuestion}/> : <CardAnswer setFailure={props.setFailure} index={index} indexLength={data.length} answer={data[index].answer} question={data[index].question} setIndex={setIndex} setScreenQuestion = {setScreenQuestion} setResult={props.setResult}/>}
        </div>
    )
}