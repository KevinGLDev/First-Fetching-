import Objeto from './componentes/objeto';
import './App.css';
import { useEffect, useState } from 'react';


const PATH_API_COVID = 'https://api.covidtracking.com/v1/us/current.json'

function App() {

  const [datos,setDatos] = useState([])

  useEffect(()=>{
    fetch(PATH_API_COVID).
    then(res=>res.json()).
    then(file=> setDatos(file))
  },[])

    const mapeo = datos.map(dato => 
      <div className='objeto-contenido'>
        {Object.keys(dato).map(key =>{ 
          return ' '+key+'=>'+dato[key]})}
      </div>)

    const mapeoDos = datos.map(dato => 
      <Objeto date= {dato['date']}
      deaths = {dato['death']}
      states = {dato['states']}
      hospitalaized = {dato['hospitalizedCurrently']}/>)
    
  return (
    <div className="App">
        <section className='contenedor-datos'>
          <h1>Datos obtenido de la API</h1>
          <h2>{PATH_API_COVID}</h2>
          <div className='contenido'>
            {mapeoDos}
          </div>
        </section>
    </div>
  );
}

export default App;
