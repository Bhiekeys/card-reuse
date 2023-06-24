import { useState } from 'react'
import Card from './components/card/card'
import Heading from './components/heading/heading'

import './App.css'

function App() {

  return (
    <>
      <div style={{ backgroundColor: 'hsl(0, 0%, 98%)' }}>
        <Heading />
        <Card />
      </div>
    </>
  );
}

export default App
