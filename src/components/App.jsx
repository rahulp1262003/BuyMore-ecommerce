import React from 'react'

import Hero from '../components/Hero'
import Explore from './pages/Explore'
import FilterAndSearch from '../components/FilterAndSearch'
import Navbar from '../components/Navbar'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='flex'>
      <Navbar />
      <div className='w-full flex flex-col overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-zinc-200 dark:[&::-webkit-scrollbar-track]:bg-zinc-400 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-300'>
        <Hero />
        <FilterAndSearch />
        <Routes>
          <Route path='/explore' element={<Explore />} />
        </Routes>
      </div>
    </div>
  )
}

export default App