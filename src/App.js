import { useState,useEffect } from 'react'
import './App.css';
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/CharacterGrid'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    .then(res => res.json())
    .then(data => {
      setItems(data)
      setIsLoading(false)
    })
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
