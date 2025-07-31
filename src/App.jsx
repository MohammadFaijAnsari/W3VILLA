import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'
import Homecontainer from './containers/Homecontainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
      {/* <h1>App Component</h1> */}
      <Homecontainer/>
      {/* <User data={{name1:"anil sidhu",age:26}}/> */}
      </div>
    </>
  )
}

export default App
