import React from 'react'

function Nav() {
    return (
        <header>
            <nav className=" flex items-center p-4 2  bg-gray-100">
                <ul className="hidden sm:flex flex-1 justify-center items-center gap-12  text-fav-blue uppercase text-md ">
                    <li className="cursor-pointer "> <a href="#home">home</a> </li>
                    <li className="cursor-pointer "> <a href="#feature">feature</a> </li>
                    <li className="cursor-pointer "> <a href="#contact">help</a> </li>
                </ul>

            </nav>
        </header>
    )
}

export default Nav
