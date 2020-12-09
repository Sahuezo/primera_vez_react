import {Link} from 'react-router-dom'

export default function Nav(){
    return(
        <>
        <nav>
            <Link to="/">Inicio  </Link>
            <Link to="/acerca-de"> Acerca De</Link>
        </nav>
        <br/><br/>
        <hr/>
        </>
        /*
         <h1>
           Hola soy el navegador
       </h1>
        */
      
    )
}