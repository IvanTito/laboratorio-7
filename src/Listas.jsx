import { useState } from 'react';
import Cards from './Cards';

const Listas = () => {

  const canciones = [
    {id: 1, nombre: 'Bohemian Rhapsody', imagen: 'BohemianRhapsody.png'},
    {id: 2, nombre: 'Kiss - Forever', imagen: 'KissForever.png'},
    {id: 3, nombre: 'Smooth Criminal', imagen: 'SmoothCriminal.png'}
  ];

  const [total, setTotal] = useState(0);
  const [busqueda, setBusqueda] = useState("");

  const cancionesFiltradas = canciones.filter((cancion) => cancion.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );
  return (
    <div style={{
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1>Total de likes de canciones: {total}</h1>

      <input
        style={{
          padding: '10px',
          marginBottom: '20px', 
          width: '300px', 
          border: '1px solid #ccc', 
          borderRadius: '5px'
        }} 
        type="text" 
        placeholder='Ingrese nombre de una cancion'
        value={busqueda}
        onChange={(e) => {
          setBusqueda(e.target.value);
        }}
      />

      <div 
        style={{
          display: 'flex',
          gap: '10px',

        }}
      >

        {cancionesFiltradas.length === 0 && (
          <p 
            style={{
              color: '#ccc',
              fontSize: '20px'
            }}
          >
            No se encontraron canciones con el nombre: {busqueda}
          </p>
        )}

        {cancionesFiltradas.map( (cancion) => {
          return (
            <Cards 
              key={cancion.id} 
              nombre={cancion.nombre}
              img={cancion.imagen}
              onLike={()=>{
                setTotal(total + 1);
                
              }}
            />
          )
        } )}
      </div>
    </div>
  )
}

export default Listas
