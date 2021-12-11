import Start from "./Componentes/Start"
import FlashCard from "./Componentes/FlashCard"
import { useState } from "react"

export default function App(){
    const [screen, setScreen] = useState(0)
    return(
    <>
        {screen === 0 ? <Start setScreen={setScreen}/> : <FlashCard/>}
    </>)
}