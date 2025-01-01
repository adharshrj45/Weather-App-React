import React from 'react'
import Weather from './components/Weather'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className='app'>
      <Toaster position="top-center" reverseOrder={false} />
      <Weather/>
    </div>
  )
}

export default App
