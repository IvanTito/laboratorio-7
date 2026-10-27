import { useState } from "react";


const Cards = ({nombre, img, onLike}) => {
    
    const [likes, setLikes] = useState(0);

  const handleClick = () => {
    console.log('like');
    setLikes(likes + 1);
    onLike();
  };  

  return (
    <div 
        style={{
            border: '1px solid #ccc',
            padding: '20px', 
            margin: '10px',
            borderRadius: '10px',
            alignItems: "center",
            textAlign: "center"
        }}
    >
    {/* Imagenes */}
        <img src={img} alt={nombre} width='150px' height='150px'/>
        <h3>{nombre}</h3>
        <button 
            style={{
                width: "100px",
                padding: '6px',
                margin: '10px',
                backgroundColor: 'rgb(87, 222, 116)',
                border: 'none', 
                borderRadius: '5px',
                color: 'white',
                fontSize: '16px', 
                fontWeight: 'bold', 
                cursor: "pointer"
            }}
            onClick={handleClick}    
        >
        Like {likes}</button>
        {likes >= 3 && (
            <p style={{
                color: "green"
            }}>
                ¡Muy popular!
            </p>
        )}
    </div>
  );
};

export default Cards
