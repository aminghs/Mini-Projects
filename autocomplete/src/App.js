import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [text, setText] = useState([])
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get('https://api.deezer.com/artist/27')
      setUsers(response.data)
      console.log(response.data)
    }
    loadUsers()
  } , [])

  const changeHandler = (text) => {
    let matches = []
    if(text.length>0) {
      matches = users.filter(user => {
        const regex = new RegExp(`${text}`, "gi")
        return user.email.match(regex)
      })
    }
    setSuggestions(matches)
    setText(text)
  }

  const suggestionsHandler = (text) => {
    setText(text)
    setSuggestions([])
  }

  return (
    <div className="container">
      <input type='text' 
        onChange={e=> changeHandler(e.target.value)} 
        value={text}
        className='col-md-12 input'
        onBlur={() => setTimeout(() => {setSuggestions([])}, 100) } />
        {suggestions && suggestions.map((suggestion, i) => {
          return <div 
            key={i} 
            className='col-md-12 justify-content-md-center' 
            onClick={() => suggestionsHandler(suggestion.email)}
          >{suggestion.email}</div>
        }) }
    </div>
    
  );
}

export default App;
