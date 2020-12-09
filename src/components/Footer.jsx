export default function Footer(){

    const anio = new Date().getFullYear()

    return(
        <>
        <br/><br/>
        <hr/>

        <footer>
            Derechos reservados {anio}
        </footer>

        </>

    )
}