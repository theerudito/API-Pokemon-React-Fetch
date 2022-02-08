// PERICION FETCH ASYNC Y AWAIT
import React, {useState, useEffect} from 'react';

let Pokemon =  ({avatar, name}) => {
  return(
    <figure>
      <img src={avatar} alt={name}/>
      <figcaption>{name} </figcaption>
    </figure>
  )
}
export default function PeticionesHooks() {
    const[pokemons, setPokeons] = useState([])
  useEffect(()=> {
    const getPokemons = async (url) => {
      let res =  await fetch(url)
        let data = await res.json()
           data.results.forEach(async(elemento) => {
              let  res = await fetch(elemento.url)
               let data = await res.json()
                  console.log(data);
                     let pokemon = {
                      id:data.id,
                      name:data.name,
                      avatar:data.sprites.front_default
                }
              setPokeons((pokemons) => [...pokemons,pokemon])
          })
        }
    getPokemons("https://pokeapi.co/api/v2/pokemon/")},[])     
    return(
      <>
        <h3>Peticiones Con Async y Await En Hooks</h3>
        {pokemons.length === 0 ? (<h6>Cargando...</h6>) : (
        pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)
        )}
      </>
    )
}


