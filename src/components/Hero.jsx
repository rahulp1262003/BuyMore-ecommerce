import React from 'react'
import { PiShoppingCart } from "react-icons/pi"
import profile from '../assets/profile.png'
function Hero() {
    return (
        <section className='w-full '>
            <div className='w-full bg-white flex justify-between items-center px-5 py-2'>
                <div className=''>
                    <h1 className='text-3xl'>Explore</h1>
                </div>

                {/* cart and profile */}
                <div className=" p-1 flex justify-center items-center rounded-full" >

                    {/* Cart */}
                    <div className='mr-1'>
                        <a href="#" className='flex py-4 pr-5 pl-4 bg-zinc-200 items-center rounded-full hover:bg-blue-600 hover:text-white'><span className='pr-2'><PiShoppingCart size={23} /></span>Cart
                        </a>
                    </div>

                    {/* Profile */}
                    <div className='flex items-center p-1 bg-blue-100 rounded-full'>
                        <div className='w-[3rem] h-[3rem] mr-2 flex justify-center items-center bg-blue-300 rounded-full'>
                            <a href="" className='' ><img src={profile} alt="" /></a>
                        </div>
                        <h2 className='pr-4'>Rahul</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero