import React from 'react'

function Footer() {
    return (
        <footer className=" bg-kiri-blue py-8">
        <div className="container flex flex-col md:flex-row items-center">
            <div className="flex flex-1 flex-wrap items-center justify-center">
                <ul className="flex text-white uppercase gap-12 text-xs">
                    <li className="cursor-pointer "> <a href="#home">home</a> </li>
                    <li className="cursor-pointer "> <a href="#feature">feature</a> </li>
                </ul>
            </div>
        </div>
    </footer>
    )
}

export default Footer
