import Party from "../assets/party.png"
import Sad from "../assets/sad.png"


export default function Result () {
    return (
        <div>
            <h1>PARABÉNS! <img src={Party} /></h1>
            <span> Você não esqueceu de nenhum flashcard!</span>
            <div>
            <h1>Putz..  <img src={Sad} /></h1>
            <span> Você esqueceu alguns flashcards..
                Não desanime! Na próxima você consegue!</span>
        </div>
        </div>

    )
}

        