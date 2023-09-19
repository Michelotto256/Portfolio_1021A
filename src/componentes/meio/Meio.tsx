
import './Meio.css'
import imagem from "..//img/prod.png";
import Link from './../link/Link'

function Meio(){
    return(
        
      <>  
      <section className="meio1">
            <div className="meio-content">
                <h1>Ola, Sou o Vitor Michelotto</h1>
                <h3>Estudante do IFMS Navirai</h3>
                <p>Lorem ipsum dolor sit amet. Sit veritatis sint et nulla dicta et assumenda necessitatibus nam nisi pariatur! Est labore illum ut nemo esse ut repudiandae obcaecati aut illum ipsam sed voluptatem enim.</p>
                <div className="btn-box">
                    <Link texto='Contrate-Me'/>
                    <Link texto='Contato'/>
                </div>
            </div>
            <div>
            <img className='produ' src={imagem} alt="" />
            </div>

            <main>
        
            </main>
        </section>
        </>
    )
}
export default Meio