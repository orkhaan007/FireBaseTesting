import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>FireBase Testing</h1>
      <p className="read-the-docs">
        By Orkhan
      </p>
      <div className="card">
        <button>
          <a target='_blank' href='https://github.com/orkhaan007'>Github</a>
        </button>
      </div>
    </>
  )
}

export default App