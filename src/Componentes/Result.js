import Party from "../assets/party.png"
import Sad from "../assets/sad.png"


export default function Result (props) {
    return (
        props.failure === 0 ? (
        <div className='result'>
            <h1>PARABÉNS! <img src={Party} alt="festa"/></h1>
            <span> Você não esqueceu de nenhum flashcard!</span>
        </div>) : (
        <div className='result'>
            <h1>Putz..  <img src={Sad} alt='Cara de triste'/></h1>
            <span> Você esqueceu alguns flashcards..<br/>
                Não desanime! Na próxima você consegue!</span>
        </div>)
    )
}     