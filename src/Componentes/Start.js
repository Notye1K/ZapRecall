import Logo from "../assets/logo.png"
import Next from "../assets/next.png"


export default function Start (props){
    const array = [['React',[{question:"O que é JSX?", answer:"Uma extensão de linguagem do JavaScript"}, {question:"O React é ___", answer:"uma biblioteca JavaScript para construção de interfaces"},
    {question:"Componentes devem iniciar com ___", answer:" letra maiúscula"}, {question:"Podemos colocar __ dentro do JSX", answer:"expressões"},
    {question:"O ReactDOM nos ajuda __", answer:"interagindo com a DOM para colocar componentes React na mesma"}, {question:"Usamos o npm para __ ", answer:"gerenciar os pacotes necessários e suas dependências"},
    {question:"Usamos props para __", answer:"passar diferentes informações para componentes "}, {question:"Usamos estado (state) para __ ", answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}]],
    ['Segundo botão',[{question:'1', answer:'resposta 1'},{question:'2', answer:'resposta 2'},{question:'3', answer:'resposta 3'}]],
    ['Terceiro botão',[{question:'pergunta 1', answer:'resposta-1'},{question:'pergunta 2', answer:'resposta-2'}]]]


    return (
        <div className='start'>
            <img className='logo' src={Logo} alt='logo'/>
            <input value={props.input} placeholder='Sua meta de zaps' 
            onChange={(e) => props.setInput(e.target.value)}></input>

            {array.map((i) => <Buttons setTitle={props.setTitle} input={props.input} setInput={props.setInput} setScreen={props.setScreen} setData ={props.setData} title={i[0]} data={i[1]}/>)}
        </div>
    )
}

function Buttons(props){
    return(
        <button data-identifier="start-zap-recall" 
        onClick={() => click(props)}
        >Praticar {props.title} <img src={Next} alt='next'/> </button>
    )
}

function click(props){
    props.setData(props.data);
    props.setScreen(1); 
    props.setInput(!isNaN(Number.parseInt(props.input)) ? parseInt(props.input) : '' )
    props.setTitle(props.title)
}