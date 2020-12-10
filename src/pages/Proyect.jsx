export default function Proyect(props){

    const {state} = props.location;

    return(
        <>
            <h1>
                A ver qué sale: {state.nombre}
            </h1> 
            <p>
                {state.descripcion}
            </p>

            {state.galeria.map((imagen,index)=>(<img src={imagen} alt="Picture" key={index}/>
            ))}
            

        </>
        
    )
}