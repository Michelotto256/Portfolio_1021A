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
                    <Link texto='Home'/>
                </li>
                <li>
                    <Link texto='Cursos'/>
                </li>
                <li>
                    <Link texto='Downloads'/>
                </li>
            </ul>

            <ul className="lista">
                <li>
                    <h3>Contato</h3>
                </li>
                <li>
                    <Link texto='Cookies'/>
                </li>
                <li>
                    <Link texto='Sobre'/>
                </li>
                <li>
                    <Link texto='Termos e Condições'/>
                </li>
            </ul>

            <ul className="lista">
                <li>
                    <h3>Suporte</h3>
                </li>
                <li>
                    <Link texto='FAQ'/>
                </li>
                <li>
                    <Link texto='Telefones'/>
                </li>
                <li>
                    <Link texto='Chat'/>
                </li>
            </ul>


        </div>
    </footer>
    )
}


export default Footer
