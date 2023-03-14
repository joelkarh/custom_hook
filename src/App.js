import { useEffect, useState, useRef } from 'react';
import './App.css';
import userandomJoke from './userandomJoke';


function App() {
//useRef : allows us to get the value of the input element
const firstNameRef = useRef(null)
const lastNameRef = useRef(null)

const [firstName, setFirstName] = useState('joel')
const [lastName, setLastName] = useState('Romy')
const joke = userandomJoke(firstName,lastName)

const generateJoke = (e)=>{
  //preventing the default action refefresh
e.preventDefault()
//only on that poitn we want to grab the value of the input field and update our state and retrigger the joke again 
setFirstName(firstNameRef.current.value)
setLastName(lastNameRef.current.value)

}

  return (
    <div className='App'>
      <h1>The Joker Generator</h1>
      <h2>{joke}</h2>
      <form action="submit">
        <input placeholder='first name' type="text" ref={firstNameRef}/>
        <input placeholder='last name' type="text"  ref={lastNameRef}/>
      </form>
      <button onClick={generateJoke}>Generate Joke</button>
    </div>
  );
}

export default App;
