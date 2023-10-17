import { useState } from 'react'
import './Meio.css'
import Conteudo from './../conteudos/Conteudos'
import imagem from "..//img/prod.png";
import Link from '../linknav/LinkNav'
type ConteudoTypes = {
    id: number,
    titulo: string,
    descrição: string,
    imagem: string
}

function Meio() {
    const [texto, setTexto] = useState("")
    function TrataTexto(e: React.ChangeEvent<HTMLInputElement>) {
        setTexto(e.target.value)
    }
    const conteudo: ConteudoTypes[] = [
        {
            id: 1,
            titulo: 'Html5',
            descrição: 'Possuo um alto conhecimento em HTML, usado para realizar varios trabalhos construindo sites.',
            imagem: '/foto4.png'
        },
        {
            id: 2,
            titulo: 'Css3',
            descrição: 'CSS é uma outra linguagem usada para complementar o HTML estilizando-o.',
            imagem: '/foto5.png'
        },
        {
            id: 3,
            titulo: 'JavaScript',
            descrição: 'Vários projetos realizados precisaram do Javascript para ser feito.',
            imagem: '/foto7.png'
        },
        {
            id: 4,
            titulo: 'Photoshop',
            descrição: 'Possuo um alto conhecimento em photoshop, uso para varios trabalhos.',
            imagem: '/foto6.png'
        },
        {
            id: 5,
            titulo: 'Lightroom',
            descrição: 'Lightroom é o programa mais usado para edição de fotos.',
            imagem: '/foto8.png'
        }
        
    ]
    return (
        <>
            <main>
                <section className="meio1">
                    <div className="meio-content">
                        <h1 className='texto_prin'>Ola, Sou o Vitor Michelotto</h1>
                        <h3>Estudante do IFMS Navirai</h3>
                        <p>Lorem ipsum dolor sit amet. Sit veritatis sint et nulla dicta et assumenda necessitatibus nam nisi pariatur! Est labore illum ut nemo esse ut repudiandae obcaecati aut illum ipsam sed voluptatem enim.</p>
                        <div className="btn-box">
                            <Link url="#" texto='Contrate-Me' />
                            <Link url="#" texto='Contato' />
                        </div>
                    </div>
                    <div>
                        <img className='produ' src={imagem} alt="" />
                    </div>
                </section>

                        <div id="divBusca">
                            <input type="text" id="txtBusca" placeholder="Buscar..." onChange={TrataTexto} />
                        </div>

                        <div className='meio2'>
                        {
                            conteudo.filter((conteudo) => conteudo.titulo.toLowerCase().includes(texto)).map(
                                (conteudo) =>
                                    <Conteudo
                                        key={conteudo.id}
                                        descrição={conteudo.descrição}
                                        titulo={conteudo.titulo}
                                        imagem={conteudo.imagem}
                                    />
                            )
                        }

                    </div>
            </main>
        </>
    )
}
export default Meio