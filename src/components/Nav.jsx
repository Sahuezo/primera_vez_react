import {Link} from 'react-router-dom'

export default function Nav(){
    return(
        <>
        <nav>
            <Link to="/">Inicio||---||  </Link>
            <Link to="/acerca-de"> Acerca De||---||</Link>
            <Link to="/infoProyectos"> Proyectos en cuadrito||---||</Link>
        </nav>
        <br/><br/>
        <hr/>
        </>

    )
}