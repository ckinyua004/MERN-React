import { useState } from 'react';
import './App.css';

function App() {
  const [bill, setBill] = useState(0)
  const [personTip, setPersonTip] = useState(0)
  const [friendTip, setFriendTip] = useState(0)

  const tip = bill * ((personTip + friendTip) / 2 / 100);
  const total = Number(bill) + Number(tip)

  function handleReset(){
    setBill(0)
    setPersonTip(0)
    setFriendTip(0)
  }

  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <BillInput  bill={bill} onSetBill={setBill} />
      <PersonPercentage tip={personTip} onSetTip={setPersonTip}/>
      <FriendPercentage tip={friendTip} onSetTip={setFriendTip}/>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} total={total} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({bill, onSetBill}){
  function handleChange(e){
    onSetBill(e.target.value)
  }

  return(
    <div>
      <label>How much was the bill amount?</label>
      <input 
        type='number' 
        value={bill} 
        onChange={handleChange} 
        placeholder="Type something..." 
      />
    </div>
  )
}

function PersonPercentage({tip, onSetTip}){
  return(
    <div>
      <label>How much did you like the service?</label>
      <select>
        <option value={0}>Dissastisfied(0%)</option>
        <option value={0.05}>It was okay(5%)</option>
        <option value={0.10}>It was good(10%)</option>
        <option value={0.20}>Absolutely amazing(20%)</option>
      </select>
    </div>
  )
}

function FriendPercentage({tip, onSetTip}){
  return(
    <div>
      <label>How much did you friend like the service?</label>
      <select>
        <option value={0}>Dissastisfied(0%)</option>
        <option value={0.05}>It was okay(5%)</option>
        <option value={0.10}>It was good(10%)</option>
        <option value={0.20}>Absolutely amazing(20%)</option>
      </select>
    </div>
  )
}

function Output({bill, tip, total}){
  return(
    <div>
      <br />
      <strong>You pay ${total.toFixed(2)}</strong> (${bill} + ${tip.toFixed(2)} tip)
    </div>
  )
}

function Reset({onReset}){
  return(
    <button onClick={onReset}>Reset</button>
  )
}

export default App;