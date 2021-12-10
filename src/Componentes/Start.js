import Logo from "./assets/logo.png"
import Next from "./assets/next.png"


export default function Start (){
    return (
        <div className='start'>
            <img src={Logo} alt='logo'/>
            <button>Praticar React <img src={Next} alt='next'/> </button>
        </div>
    )
}