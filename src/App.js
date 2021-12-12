import Start from "./Componentes/Start"
import FlashCard from "./Componentes/FlashCard"
import { useState } from "react"

export default function App(){
    const [screen, setScreen] = useState(0)
    const [input, setInput] = useState('')

    

    return(
    <>
        {screen === 0 ? <Start input={input} setInput={setInput} setScreen={setScreen}/> : <FlashCard input={input}/>}
    </>)
}