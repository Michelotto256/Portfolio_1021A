import './Header.css'
import Link from './../link/Link'
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
                    <Link texto='Home'/>
                </li>
                <li>
                    <Link texto='noticia'/>
                </li>
                <li>
                    <Link texto='sobre'/>
                </li>
                <li>
                    <Link texto='contato'/>
                </li>
            </ul>
        </nav>
        
    </header>
    )
}

export default Header
