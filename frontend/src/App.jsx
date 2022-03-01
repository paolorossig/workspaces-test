import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [response, setResponse] = useState('')
  const serverUrl =
    process.env.NODE_ENV === 'production'
      ? import.meta.env.VITE_SERVER_PROD_URL
      : import.meta.env.VITE_SERVER_DEV_URL

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(serverUrl).then((res) => res.json())
        setResponse(res)
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
        <p>{response?.message}</p>
        <p>Author:</p>
        <p>{response?.author}</p>
        <p>Users</p>
        {response?.users?.map((user) => (
          <p key={user._id}>{user.email}</p>
        ))}
      </header>
    </div>
  )
}

export default App
