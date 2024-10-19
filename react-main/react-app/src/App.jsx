import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './parts/Header'
import MusicCard from './parts/MusicCard'
import Albums from './parts/Albums'

function App() {
  return (
    <>
      <div className='header'>
        <Header>
        </Header>
      </div>
      <div className='main-panel'>
        <div className='main-panel-area'>
          <MusicCard>
          </MusicCard>

          <Albums>
          </Albums>
        </div>
      </div>
    </>
  )
}

export default App
