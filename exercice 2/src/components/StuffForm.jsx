import { useState } from "react";
import { use } from "react";


export default function StuffForm({onSubmit}) {
  const [name , setName] = useState('')
  const [price , setPrice] = useState(0)

  function handleSubmit(e){
    e.preventDefault();
    onSubmit({name , price})
    setName('')
    setPrice(0)


  }

  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input onChange={e=> setName(e.target.value)} type="search" placeholder="Banana" />

      <p>Stuff price</p>
      <input onChange={e=> setPrice(Number(e.target.value))} type="search" placeholder="15" />

      <button onClick={handleSubmit}>Add Stuff</button>
    </form>
  );
}
