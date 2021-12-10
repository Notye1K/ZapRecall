import CardQuestion from "./CardQuestion"
import CardAnswer from "./CardAnswer"
import LogoMini from "./assets/logo-mini.png"

export default function FlashCard() {
    return (
        <div className='flashCard'>
            <img src ={LogoMini} alt='logo-mini'/>
            <CardQuestion/>
            <CardAnswer/>
        </div>
    )
}