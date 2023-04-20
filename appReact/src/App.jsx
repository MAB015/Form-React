import { useState } from 'react'
import Form from './components/Form'
import './assets/css/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Form />
    </div>
  )
}

export default App
