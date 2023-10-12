import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Encabezado from './Components/Encabezado'
import Body from './Components/Body';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import { Button } from 'react-bootstrap';


class App extends Component{
  render(){
    const palabras=[
      {id:1,palabra:"Dictionary: ",definicion:"Libro donde vienen definiciones de palabras"},
      {id:2,palabra:"Eat: ",definicion:"Tomar alimento por la boca"},
      {id:3,palabra:"Park: ",definicion:"Terreno acotado generalmente con plantas y arboles"},
      {id:4,palabra:"Play: ",definicion:"Realizar una accion, usualmente para divertirse"},
      {id:5,palabra:"Sleep: ",definicion:"Reposar con los ojos cerrados en un estado inconsciente"}
    ]
  return (
    <div className="App">
      <Banner
      texto="Diccionario"
      />
        <Encabezado/>

        <Body
          nombre="Roberto Axel Ramirez Sandoval"
          palab={palabras}
        />
  
        <Button onClick={()=>{alert("Alerta de un diccionario en ingles");}} variant="secondary">
          Alerta
        </Button>

        <Footer
        etiquetaHTML="(C) Ramirez Sandoval Roberto Axel - 2023"/>
    </div>
  );}
}

export default App;
