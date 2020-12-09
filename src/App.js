import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//Componentes
import Nav from './components/Nav'
import Footer from './components/Footer'
//Pagina
import Inicio from './pages/Inicio'
import AcercaDe from './pages/AcercaDe'
import Proyectos from './pages/Proyectos'
import Error from './pages/Error'
  


export default function app(){
  return(
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Inicio}/>
        <Route exact path="/acerca-de" component={AcercaDe}/>
        <Route exact path="/infoProyectos" component={Proyectos}/>
        <Route component={Error}/>
      </Switch>
      <Footer/>
    </Router>
   
  )
}
