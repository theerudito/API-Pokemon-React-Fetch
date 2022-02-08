// PETICIONES FETCH CON HOOKS
import React, {useState, useEffect} from 'react';

let Pokemon =  ({avatar, name}) => {
  return(
    <figure>
      <img src={avatar} alt={name}/>
      <figcaption>{name} </figcaption>
    </figure>
  )
}

export default function PericionesHooks() {
    const[pokemons, setPokeons] = useState([])
    
  useEffect(()=> {
    let url = "https://pokeapi.co/api/v2/pokemon/"
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.results.forEach((elemento) => {
    fetch(elemento.url)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              let pokemon = {
                id:data.id,
                name:data.name,
                avatar:data.sprites.front_default
              }
                setPokeons((pokemons) => [...pokemons,pokemon])
            })
        });
      })
},[])        
    return(
      <>
        <h3>Peticiones Fetch Con Hooks</h3>
        {pokemons.length === 0 ? (<h6>Cargando...</h6>) : (
        pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)
        )}
      </>
    )
}


