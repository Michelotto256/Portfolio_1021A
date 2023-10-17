import './Header.css'
import Link from '../linknav/LinkNav'
import imagem from "../img/logov.png";

export function Header(){
    return(
    <header> 
        <div>
            <img src={imagem} alt="" /> 
        </div>
        <nav>
            <ul>
                <li>
                    <Link url="/" texto='Home'/>
                </li>
                <li>
                    <Link url="#" texto='noticia'/>
                </li>
                <li>
                    <Link url="#" texto='sobre'/>
                </li>
                <li>
                    <Link url="/contato" texto='contato'/>
                </li>
            </ul>
        </nav>
        
    </header>
    )
}

export default Header
