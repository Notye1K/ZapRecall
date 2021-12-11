import Start from "./Componentes/Start"
import FlashCard from "./Componentes/FlashCard"
import Result from "./Componentes/Result"
import { useState } from "react"

export default function App(){
    const [screen, setScreen] = useState(0)
    const [result, setResult] = useState(0)
    const [failure, setFailure] = useState(0)

    return(
    <>
        { result === 0 ? (screen === 0 ? <Start setScreen={setScreen}/> : <FlashCard setFailure={setFailure} setResult= {setResult} />) : <Result failure={failure}/>}
    </>)
}