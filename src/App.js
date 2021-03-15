import { useState,useEffect } from 'react'
import './App.css';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://www.breakingbadapi.com/api/characters')
    .then(res => res.json())
    .then(data => {
      setItems(data)
      setIsLoading(false)
    })
  }, [])
  
  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
