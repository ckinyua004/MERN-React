import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

function Logo() {
  return <h1> Far Away</h1>
}

function Form() {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e){
    e.preventDefault()

    if(!description) return;

    const newItem = {description, quantity, packed: false, id: Date.now()}

    setDescription('')
    setQuantity(1)
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What will you be needing for your trip</h3>
      <select value={quantity} onChange={(e)=>{setQuantity(Number(e.target.value))}}>
        {Array(20).fill(0).map((_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={(e)=>setDescription(e.target.value)}/>
      <button>Add</button>
    </form>
  )
}

function PackingList() {
  return (
    <ul className="list"> {initialItems.map(item=><Item item={item} key={item.id}/>)}
    </ul>
  )
}

function Item({item}) {
  return (
    <li>
      <input type="checkbox" value={item.packed} />
      <span style={item.packed ? { textDecoration : "line-through"} : {}}>{item.quantity} {item.description}</span>
      <button>❌</button>
    </li>
  )
}

function Stats() {
  return(
    <footer className="stats">
      <em>You have XX items on your list, and you have packed X</em>
    </footer>
  )
}