"use client"

import { useState } from "react"

export default function Home() {
  const [name, setName] = useState("")  //  o name e o "state" e o setName e o "setState". e ambos sao funcoes do react para mudar o "state", ou seja, para mudar o estado visual da aplicacao "DOM" 
  const [surname, setSurname] = useState("")

  const handleChangeName = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }

  const handleChangeSurname = (event) => {
    console.log(event.target.value)
    setSurname(event.target.value)
  }

  return (
    <>
      <p>{name}</p>
      <label htmlFor="name">Name</label>
      <input 
        type="text" 
        id="name" 
        value={name}   // no value estamos passando o state name para pegar o valor inicial de value  
        onChange={handleChangeName}    // no onChange estamos passando uma funcao handleChangeName e dentro dessa funcao estamos passando setName, sendo que o setName e responsalvel por "atualizar" o state    
      />   
      <br/>
      <br/>
      <label htmlFor="surname">Surname</label>
      <input type="text" id="surname" value={surname} onChange={handleChangeSurname} />
      <br/>
      <br/>
      <button>click</button> 
    </>
  )
}
