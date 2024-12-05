import React from 'react'

import Hero from '../components/Hero'
import Trends from './pages/Trends'
import Explore from './pages/Explore'
import Food from './pages/Food'
import Cloths from './pages/Cloths'
import Electronics from './pages/Electronics'
import Orders from './pages/Orders'
import Cart from './pages/Cart'
import Settings from './pages/Settings'

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
          <Route path='/' element={<Trends />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/food' element={<Food />} />
          <Route path='/cloths' element={<Cloths />} />
          <Route path='/electronics' element={<Electronics />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default App