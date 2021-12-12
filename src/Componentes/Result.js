import Party from "../assets/party.png"
import Sad from "../assets/sad.png"
import Next from "../assets/next.png"



export default function Result (props) {
    return (
        <div className='result'>
            {props.input === '' ? (
            props.failure === 0 ? (<Screen message='winner'/>) : (<Screen message='failure'/>)) : (
            props.input <= props.meta ? (<Screen message='winner'/>) : (<Screen message='failure'/>)
            )}

            <button onClick={() => window.location.reload()} className="tryAgain">Tentar novamente <img src={Next} alt='next'/></button>
        </div>
    )

}

function Screen (props){
    return (
        props.message === 'winner' ? (
            <>
                <h1>PARABÉNS! <img src={Party} alt="festa"/></h1>
                <span> Você não esqueceu de nenhum flashcard!</span>
            </>): (
            <>
                <h1>Putz..  <img src={Sad} alt='Cara de triste'/></h1>
                <span> Você esqueceu alguns flashcards..<br/>
                    Não desanime! Na próxima você consegue!</span>
            </>)
    )
}