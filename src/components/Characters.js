//Uso de props
export default function Characters(props) {
  
    //Obtenemos la info de characters mediante props entre componentes
    const {characters, setCharacters} = props;
    
    //Función para resetear los personajes al clicar el botón de volver a la home
    const resetCharacters = () => {
        setCharacters(null);
    }

    return (
    <div className="characters">
    <h1>Descubre a los personajes actuales</h1>
    {/* Botón de vovler a la ahome */}
    <span className="back-home" onClick={resetCharacters}>Vuelve a la home</span>
    <div className="container-characters">
        {/* Recorremos el array para extraer la info de los personajes */}
        {characters.map((character,index) => (
            <div className="character-container" key={index}>
                <div>
                    <img src={character.image} alt={character.name} />
                </div>
                <div>
                  <h3>{character.name}</h3>  
                  <h6>
                      {character.status === "Alive" ? (
                        <>
                            <span className="alive" />
                        Alive
                        </>
                    ): (
                     <>
                        <span className="dead" />
                        Dead
                     </>  
                    )}                        
                    </h6>
                    <p>
                        <span className="text-grey">Episodios: </span>
                        {/* Número de episodios */}
                        <span>{character.episode.length}</span>
                    </p>
                    <p>
                        <span className="text-grey">Especie: </span>
                        <span>{character.species}</span>
                    </p>
                </div>
            </div>   
        ))}
    </div>
    {/* Botón de volver a la home */}
    <span className="back-home" onClick={resetCharacters}>Vuelve a la home</span>
    </div>
  );
}
