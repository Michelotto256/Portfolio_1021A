import './Contato.css'
import imagem from "/undraw_shopping_re_3wst.svg";
import LinkNav from '../linknav/LinkNav';
import { useState } from 'react'

export function Contato(){
    const [nome,setNome]=useState("")
    const [email,setEmail]=useState("")
    const [cel,setCel]=useState("")
    const [msg,setMsg]=useState("")

    function TrataNome(e:React.ChangeEvent<HTMLInputElement>){
        setNome(e.target.value)
    }
    function TrataEmail(e:React.ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value)
    }
    function TrataCel(e:React.ChangeEvent<HTMLInputElement>){
        setCel(e.target.value)
    }
    function TrataMsg(e:React.ChangeEvent<HTMLTextAreaElement>){
        setMsg(e.target.value)
    }
    return(
        <>
        <div className='tudo'>
        <div className="container">
            <div className="form-image">
                <img src={imagem} alt="" />
            </div>
            <div className="form">
                <form action="#">
                    <div className="form-header">
                        <div className="titulo">
                            <h1>Cadastre-se</h1>
                        </div>
                        <div className="login-button">
                            <button><LinkNav url="#" texto='Entrar'></LinkNav></button>
                        </div>
                    </div>


                    <div className="input-tudo">
                        <div className="input-box">
                            <label htmlFor="name">Nome</label>
                            <input id="name" type="text" name="name" placeholder="Digite seu nome" onChange={TrataNome} required/>
                        </div>

                        <div className="input-box">
                            <label htmlFor="email">E-mail</label>
                            <input id="email" type="email" name="email" placeholder="Digite seu e-mail" onChange={TrataEmail} required />
                        </div>

                        <div className="input-box">
                            <label htmlFor="telefone">Celular</label>
                            <input id="number" type="tel" name="telefone" placeholder="(xx) xxxx-xxxx" pattern="^\(?\d{2}\)?[-.\s]?\d{4}[-.\s]?\d{4}$" onChange={TrataCel} required />
                        </div>

  
                        <div className="input-box2">                      
                        
                        <div className='box2'>
                            <p>Nome:{nome && <p> {nome} </p>}</p>
                        </div>

                        <div className='box2'>
                            <p>Email:{email && <p> {email} </p>}</p>
                        </div>
                        
                        <div className='box2'>
                            <p>Celular:{cel && <p> {cel} </p>}</p>
                        </div>
                        
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea id="mensagem" name="Mensagem" placeholder="Digite sua Mensagem" required onChange={TrataMsg}></textarea>
                            <div className='box2'>
                            <p>Mensagem:{msg && <p> {msg} </p>}</p>
                        </div>
                        </div>

                    </div>
                    <div className="genero-inputs">
                        <div className="genero-titulo">
                            <h6>Gênero</h6>
                        </div>

                        <div className="genero-tudo">
                            <div className="genero-input">
                                <input id="female" type="radio" name="genero" />
                                <label htmlFor="female">Feminino</label>
                            </div>

                            <div className="genero-input">
                                <input id="male" type="radio" name="genero" />
                                <label htmlFor="male">Masculino</label>
                            </div>

                            <div className="genero-input">
                                <input id="others" type="radio" name="genero" />
                                <label htmlFor="others">Outros</label>
                            </div>

                            <div className="genero-input">
                                <input id="none" type="radio" name="genero" />
                                <label htmlFor="none">Prefiro não dizer</label>
                            </div>
                        </div>
                    </div>

                    <div className="btn-box1">
                        <LinkNav url="#" texto='Continuar'/>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default Contato