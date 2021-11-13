import React from 'react'

function Nav() {
    return (
        <header>
            <nav className=" flex items-center p-4 2 fixed z-50 w-full top-0 shadow-lg bg-gray-100">
                <ul className="hidden sm:flex flex-1   justify-center items-center gap-12  text-kiri-blue uppercase text-md font-medium     ">
                    <li className="cursor-pointer duration-300 ease-in-out hover:text-blue-500 "> <a href="#home">home</a> </li>
                    <li className="cursor-pointer duration-300 ease-in-out hover:text-blue-500 "> <a href="#features">features</a> </li>
                    <li className="cursor-pointer duration-300 ease-in-out hover:text-blue-500 "> <a href="#donation">Donation</a> </li>
                </ul>

            </nav>
        </header>
    )
}

export default Nav
