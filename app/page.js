"use client"

import { useState } from "react"

export default function Home() {
  const [name, setName] = useState("")
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
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={handleChangeName} />   
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
