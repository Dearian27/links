import './App.css';
import { Analytics } from '@vercel/analytics/react';
import Button from './components/Button'
import Paper from './components/Paper'
import Signature from './components/Signature'

function App() {

  return (
    <>
      <Analytics/>
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
