import React from 'react'


function Nav() {
    return (
        <header>
            <nav className=" flex items-center p-4  fixed z-50 w-full top-0 shadow-lg bg-gray-100">
                <ul className="flex flex-1   justify-center items-center gap-6 md:gap-12  text-gray-600 uppercase text-sm md:text-md font-medium     ">
                    <div className="flex justify-center items-center gap-x-1.5 hover:text-gray-800  " >
                        <i class="fas fa-home"></i>
                        <li className="cursor-pointer duration-300 ease-in-out "> <a href="#home">home</a> </li>
                    </div>
                    <div className="flex justify-center items-center gap-x-1.5 hover:text-gray-800 " >
                        <i class="fas fa-bahai"></i>
                        <li className="cursor-pointer duration-300 ease-in-out "> <a href="#features">features</a> </li> 
                    </div>
                    <div className="flex justify-center items-center gap-x-1.5 hover:text-gray-800 " >
                        <i class="fas fa-hand-holding-heart"></i>
                        <li className="cursor-pointer duration-300 ease-in-out "> <a href="#donation">Donation</a> </li>
                    </div>
                </ul>

            </nav>
        </header>
    )
}

export default Nav
