import React from 'react'

function Footer() {
    return (
        <footer className=" bg-gray-100 z-50 fixed bottom-0 left-0 w-full py-8 border-t-2 border-color-gray-100 ">
            <div className="container flex flex-col gap-x-3.5 gap-y-3 justify-center md:flex-row  items-center">
                <div className="w-40 h-10 text-md  bg-gray-300 ring-2 ring-gray-400 text-gray-700 hover:text-gray-50 hover:bg-gray-700 duration-500 ease-in-out rounded-full flex justify-center items-center gap-x-1.5">
                    <i class="  fab fa-discord"></i>
                    <button className="font-medium" > <a href=""> Add to Discord </a></button>
                </div>

                <div className="w-40 h-10 text-md  bg-gray-300 ring-2 ring-gray-400 text-gray-700 hover:text-gray-50 hover:bg-gray-700 duration-500 ease-in-out rounded-full flex justify-center items-center gap-x-1.5">
                    <i class="fas fa-book-open"></i>
                    <button className="font-medium" > <a href=""> Read the guide </a></button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
