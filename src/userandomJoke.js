import {useState,useEffect} from 'react'

function userandomJoke(firstName,lastName){ 
const [joke, setJoke] = useState('')
useEffect(() => {
  //here we are fetching the data from the API
  const fetchJoke = async () => (
    await fetch(`https://api.chucknorris.io/jokes/random?firstName=${firstName}&lastName=${lastName}`)
    .then(res => res.json())
    .then(data => {
      setJoke(data.value)
    })
  )
  fetchJoke();
}, [firstName,lastName]);
     return joke;
}

export default userandomJoke