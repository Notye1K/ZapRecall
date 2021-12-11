import Logo from "../assets/logo.png"
import Next from "../assets/next.png"


export default function Start (props){
    return (
        <div className='start'>
            <img className='logo' src={Logo} alt='logo'/>
            <button data-identifier="start-zap-recall" onClick={() => props.setScreen(1)}>Praticar React <img src={Next} alt='next'/> </button>
        </div>
    )
}