import React from 'react'

function Footer() {
    return (
        <footer className=" bg-kiri-blue py-3 fixed bottom-0 left-0 w-full z-50  ">
            <div className="container flex flex-col md:flex-row items-center">
                <div className="flex flex-1 flex-col flex-wrap  items-center justify-center">
                    <h1 className=" text-sm text-gray-100 mb-2 font-medium ">Community</h1>
                    <ul className="flex text-white flex-col text-center md:text-left text-xs">
                        <li className="cursor-pointer "> <a href="">Top.gg Website</a> </li>
                        <li className="cursor-pointer "> <a href="#feature">Discord Support Server</a> </li>
                        <li className="cursor-pointer "> <a href="#feature">Discord Community Server</a> </li>
                    </ul>
                </div>

                <div className="flex flex-1 flex-col flex-wrap items-center justify-center mt-2 md:mt-0 ">
                    <h1 className=" text-sm text-gray-100 mb-2 font-medium ">More</h1>
                    <ul className="flex text-white flex-col text-xs text-center md:text-left">
                        <li className="cursor-pointer "> <a href="">Github</a> </li>
                    </ul>
                </div>

                
            </div>
            <p className="text-sm text-gray-50 mt-2 text-center"> C 2021 Kiri</p>
        </footer>
    )
}

export default Footer
