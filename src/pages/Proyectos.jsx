import infoProyectos from '../helper/infoProyectos'
import {Link} from 'react-router-dom'
/*
<Link to={`/proyectos/${proyecto.slug}`}>

                                <button>Ver</button>
                                </Link> */
export default function Proyectos(){
    return(
        <>
            <h1 style={{textAlign:'center'}}>FELICIDADES!! enlazaste los proyectos!</h1>
            <div className="contenedor">
                <div className="galeria">
                    {infoProyectos.map((proyecto, index)=>{
                        return(
                            <div className="proyecto" key={index}>
                            <img src={proyecto.cover} alt="NoMeSaleLaFoto"/>
                            <div className="texto">
                                <h3> {proyecto.nombre} </h3>
                                <p> {proyecto.nombrelargo} </p>
                                <Link to={{
                                        pathname:`/proyectos/${proyecto.slug}`,
                                        state:{
                                            nombre:proyecto.nombre,
                                            descripcion: proyecto.descripcion,
                                            galeria: proyecto.galeria,
                                        }                                      
                                       
                                }}>
                                    <button>VER</button>

                                </Link>
                                
                                
                            </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div> 
        </>
    )
}