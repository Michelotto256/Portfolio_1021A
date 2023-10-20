import './Footer.css'
import Link from '../linknav/LinkNav'
import imagem from "../img/logopé.png";

export function Footer(){
    return(
    <footer>
        <div className='conteudo'>
            <div className='coisas'>
            <img className='rodape' src={imagem} alt="" />
            </div>
            <ul className="lista">
                <li>
                    <h3>Adquira o Seu</h3>
                </li>
                <li>
                    <Link url="#" texto='Home'/>
                </li>
                <li>
                    <Link url="#" texto='Cursos'/>
                </li>
                <li>
                    <Link url="#" texto='Downloads'/>
                </li>
            </ul>

            <ul className="lista">
                <li>
                    <h3>Regras</h3>
                </li>
                <li>
                    <Link url="#" texto='Cookies'/>
                </li>
                <li>
                    <Link url="#" texto='Sobre'/>
                </li>
                <li>
                    <Link url="#" texto='Termos e Condições'/>
                </li>
            </ul>

            <ul className="lista">
                <li>
                    <h3>Suporte</h3>
                </li>
                <li>
                    <Link url="#" texto='FAQ'/>
                </li>
                <li>
                    <Link url="#" texto='Telefones'/>
                </li>
                <li>
                    <Link url="/contato" texto='Contato'/>
                </li>
            </ul>


        </div>
    </footer>
    )
}


export default Footer
