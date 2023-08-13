import './App.css'
import Button from './components/Button'
import Paper from './components/Paper'
import Signature from './components/Signature'

function App() {

  return (
    <>
      <div className="container">
        <div className="background">
          <div className="topBG" />
        </div>
        <Paper />
      </div>
      <Signature />
    </>
  )
}

export default App
