import React from 'react'
import { IoTrendingUpOutline, IoBagOutline } from "react-icons/io5";
import { PiShoppingCart, PiTShirt, PiHamburger } from "react-icons/pi";
import { BsTv } from "react-icons/bs";
import { LuListChecks } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <>
            <aside className='bg-white flex h-screen w-[20rem] overflow-y-auto [&::-webkit-scrollbar]:w-0 border-r border-r-zinc-200 '>
                <div className='w-full justify-between h-screen'>
                    <div className='logo p-4 flex'>
                        <h2 className='text-3xl'>Buy<span className='text-blue-600 font-medium'>M</span>ore</h2>
                    </div>

                    {/* Pages */}

                    <div className='mx-4 mt-3 rounded-xl min-w-max flex  items-start flex-col' >
                        {/* Trends */}
                        <NavLink to="/" className={({isActive})=>(isActive ? 'flex px-6 py-4 my-1 w-full bg-blue-600 text-white rounded-2xl' : 'flex px-6 py-4 my-1 w-full hover:bg-blue-200 hover:text-black hover:rounded-2xl')}><span className='pr-2'><IoTrendingUpOutline size={25} /></span>Trends</NavLink>

                        {/* Explore */}
                        <NavLink to="/explore" className={({isActive})=>(isActive ? 'flex px-6 py-4 my-1 w-full bg-blue-600 text-white rounded-2xl' : 'flex px-6 py-4 my-1 w-full hover:bg-blue-200 hover:text-black hover:rounded-2xl')}><span className='pr-2'><IoBagOutline size={25} /></span>Explore</NavLink>

                        {/* Food */}
                        <NavLink to="/food" className={({isActive})=>(isActive ? 'flex px-6 py-4 my-1 w-full bg-blue-600 text-white rounded-2xl' : 'flex px-6 py-4 my-1 w-full hover:bg-blue-200 hover:text-black hover:rounded-2xl')}><span className='pr-2'><PiHamburger size={25} /></span>Food</NavLink>

                        {/* Cloths */}
                        <NavLink to="/cloths" className={({isActive})=>(isActive ? 'flex px-6 py-4 my-1 w-full bg-blue-600 text-white rounded-2xl' : 'flex px-6 py-4 my-1 w-full hover:bg-blue-200 hover:text-black hover:rounded-2xl')}><span className='pr-2'><PiTShirt size={25} /></span>Cloths</NavLink>

                        {/* Electronics */}
                        <NavLink to="/electronics" className={({isActive})=>(isActive ? 'flex px-6 py-4 my-1 w-full bg-blue-600 text-white rounded-2xl' : 'flex px-6 py-4 my-1 w-full hover:bg-blue-200 hover:text-black hover:rounded-2xl')}><span className='pr-2'><BsTv size={25} /></span>Electronics</NavLink>
                    </div>

                    {/* Orders and Cart */}
                    <div className='mx-4 mb-10 mt-10 bg-blue-100 rounded-2xl min-w-max flex items-start flex-col' >
                        {/* Orders */}
                        <NavLink to="/orders" className={({isActive})=>(isActive ? 'flex px-6 py-4 my-1 w-full bg-blue-600 text-white rounded-2xl' : 'flex px-6 py-4 my-1 w-full hover:bg-blue-200 hover:text-black hover:rounded-2xl')} ><span className='pr-2' ><LuListChecks size={25} /></span>Orders</NavLink>

                        {/* Cart */}
                        <NavLink to="/cart" className={({isActive})=>(isActive ? 'flex px-6 py-4 my-1 w-full bg-blue-600 text-white rounded-2xl' : 'flex px-6 py-4 my-1 w-full hover:bg-blue-200 hover:text-black hover:rounded-2xl')}><span className='pr-2'><PiShoppingCart size={25} /></span>Cart</NavLink>
                    </div>

                    {/* Settings */}
                    <div className="flex m-3 rounded-2xl">
                        <NavLink to="/settings" className={({isActive})=>(isActive ? 'flex px-6 py-4 my-1 w-full bg-blue-600 text-white rounded-2xl' : 'flex px-6 py-4 my-1 w-full hover:bg-blue-200 hover:text-black hover:rounded-2xl')}><span className='pr-2 flex'><IoSettingsOutline size={25} /></span>Setting</NavLink>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Navbar