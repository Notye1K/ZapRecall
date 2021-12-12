import Logo from "../assets/logo.png"
import Next from "../assets/next.png"


export default function Start (props){

    return (
        <div className='start'>
            <img className='logo' src={Logo} alt='logo'/>
            <input value={props.input} placeholder='Sua meta de zaps' 
            onChange={(e) => props.setInput(e.target.value)}></input>
            <button data-identifier="start-zap-recall" onClick={() => {props.setScreen(1); props.setInput(!isNaN(Number.parseInt(props.input)) ? parseInt(props.input) : '' )}}>Praticar React <img src={Next} alt='next'/> </button>
        </div>
    )
}