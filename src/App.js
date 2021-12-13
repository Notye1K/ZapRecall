import Start from "./Componentes/Start"
import FlashCard from "./Componentes/FlashCard"
import { useState } from "react"

export default function App(){
    
    const [screen, setScreen] = useState(0)
    const [input, setInput] = useState('')
    const [data, setData] = useState([])
    const [title, setTitle] = useState('')

    return(
    <>
        {screen === 0 ? (
        <Start setTitle={setTitle} setData={setData} input={input} setInput={setInput} setScreen={setScreen}/>) : (
        <FlashCard title={title} data={data} input={input}/>)}
    </>)
}