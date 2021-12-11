import CardQuestion from "./CardQuestion"
import CardAnswer from "./CardAnswer"
import LogoMini from "../assets/logo-mini.png"
import { useState } from "react"

export default function FlashCard() {
    const data = [{question:"O que é JSX?", answer:"Uma extensão de linguagem do JavaScript"}, {question:"O React é ___", answer:"uma biblioteca JavaScript para construção de interfaces"},
    {question:"Componentes devem iniciar com ___", answer:" letra maiúscula"}, {question:"Podemos colocar __ dentro do JSX", answer:"expressões"},
    {question:"O ReactDOM nos ajuda __", answer:"interagindo com a DOM para colocar componentes React na mesma"}, {question:"Usamos o npm para __ ", answer:"gerenciar os pacotes necessários e suas dependências"},
    {question:"Usamos props para __", answer:"passar diferentes informações para componentes "}, {question:"Usamos estado (state) para __ ", answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}]

    const [screenQuestion, setScreenQuestion] = useState(0)

    return (
        <div className='flashCard'>
            <img src ={LogoMini} alt='logo-mini'/>
            {screenQuestion === 0 ? <CardQuestion setScreenQuestion = {setScreenQuestion}/> : <CardAnswer setScreenQuestion = {setScreenQuestion}/>}
        </div>
    )
}