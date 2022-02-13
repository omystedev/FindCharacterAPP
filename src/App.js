import imageHome from './assets/images/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  // Generamos un state para pasar los datos de la API au nuevo componente para renderizar los datos
  const[characters,setCharacters] = useState(null);
  
  // Función tipo flecha (constante asíncrona)que hace peticiones a la API
  const reqApi = async () => {
    
    const api = await fetch('https://rickandmortyapi.com/api/character')
    
    //Obtenemos la info para ver los personajes en un array[results]
    const characterApi = await api.json();

    // Seteamos el state para pasar la info de la API al state para trabajarla 
    setCharacters(characterApi.results);
 
  };


  return (
    <div className="App">
      <header className="App-header">
       
        <h1 className="title">Personajes de Rick&Morty</h1>

        {/* Uso de ternarios: cuando este lleno nos muestra personajes y cuando no, muestra imagen de la home */}
        {characters ? (
          /* Importación componente de nombres y setear nombres al clicar botón home */
          <Characters characters = {characters} setCharacters={setCharacters}/>
        ): (
          /* Usamos fragment para encapsular */
          <>
          {/* Importación imagen de la Home */}
          <img src={imageHome} alt="Personajes" className="img-home" />
          {/* Botón que obtiene info de la función reqApi */}
          <button onClick={reqApi} className="btn-search">Buscar</button>          
          </>
        )}
        
        
      </header>
    </div>
  );
}

export default App;
