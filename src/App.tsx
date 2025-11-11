import { useEffect, useState } from "react"

function App() {
const [pokemon, setPokemon] = useState(null)

  useEffect(() =>{
    const randomInt = (min:number,) "https://pokeapi.co/api/v2/pokemon/390"
    fetch(URL, {
      headers: {
        Accept: "application/json"
      }
    })
    .then(response => response.json())
    .then(data => setPokemon(data))
  }, [])

  return (
    <>
      <p className="text-4xl">
        {pokemon?.name}
        {pokemon?.abilities.map(skill => {
        return <p 
        })}
      </p>
    
    </>
  )
}

export default App
