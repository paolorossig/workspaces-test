import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [response, setResponse] = useState('')
  const serverUrl = import.meta.env.VITE_SERVER_URL

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(serverUrl).then((res) => res.json())
        setResponse(res?.message)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Backend Response:</p>
        <p>{response}</p>
      </header>
    </div>
  )
}

export default App
