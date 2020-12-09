import infoProyectos from '../helper/infoProyectos'

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
                                <h3>Ahora lo lograste x2 </h3>
                                <p>Porque lograste poner el parrafo</p>
                                <button>Avemus Boton</button>
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