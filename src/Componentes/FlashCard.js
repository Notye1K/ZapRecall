import CardQuestion from "./CardQuestion"
import CardAnswer from "./CardAnswer"
import LogoMini from "../assets/logo-mini.png"
import { useState } from "react"
import Result from "./Result"

export default function FlashCard({data, input, title}) {

    const [screenQuestion, setScreenQuestion] = useState(0)
    const [index, setIndex] = useState(0)
    const [result, setResult] = useState(0)
    const [failure, setFailure] = useState(0)
    const [meta, setMeta] = useState(0)


    return (
        <div className='flashCard'>
            <img className='miniLogo' src ={LogoMini} alt='logo-mini'/>

            {result === 0 && <div className='title'>{title}</div>}

            { result === 0 ? (screenQuestion === 0 ? (
            (<CardQuestion index={index} indexLength={data.length} question={data[index].question}
                setScreenQuestion = {setScreenQuestion}/>)

            ) : (<CardAnswer meta={meta} setMeta={setMeta} setFailure={setFailure} index={index} 
                indexLength={data.length} answer={data[index].answer} question={data[index].question} 
                setIndex={setIndex} setScreenQuestion = {setScreenQuestion} setResult={setResult}/>)
                
            ) : <Result input={input} meta={meta} failure={failure}/>}
        </div>
    )
}