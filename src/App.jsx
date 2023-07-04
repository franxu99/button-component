import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 align="center">BUTTON-COMPONENT</h1>

      <div align="center">
        Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
      </div>

      <div align="center">
        <h3>
          <a href="https://{your-demo-link.your-domain}">
            Demo
          </a>
          <span> | </span>
          <a href="https://{your-url-to-the-solution}">
            Solution
          </a>
          <span> | </span>
          <a href="https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY">
            Challenge
          </a>
        </h3>
      </div>
    </>
  )
}

export default App
