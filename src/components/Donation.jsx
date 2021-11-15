import React from 'react'
import donation from "../images/donation.svg"

function Donation() {
    return (
        <div id="donation" className="relative mt-24 md:mt-60 mb-48  ">
            <div className="container flex flex-col justify-center items-center ">
                {/* Title */}
                <div className="flexflex-col items-center text-center max-w-sm mb-14">
                    <div className="text-kiri-blue text-2xl flex justify-center items-center gap-x-2 ">
                        <i class="fas fa-hand-holding-heart"></i>
                        <h1  >Donation and Perks</h1>
                    </div>
                    <p className="text-gray-400 text-center my-4  lg:w-full">
                    This is not required, but donating will keep me alive and performing well, as well as earning some exclusive perks for you!

                    </p>
                </div>
                {/* <!-- Image --> */}
                <div className="flex  justify-center ">
                    <img className="w-5/6 h-5/6 sm:w-3/4 z-10 sm:h-3/5 md:w-full md:h-full" src={donation}  alt=""/>
                </div>
                
            </div>
            {/* <!-- Rounded Reactangle --> */}
            <div className="hidden lg:block overflow-hidden  bg-kiri-2  absolute h-80 w-full -bottom-24  ">
            </div>
        </div>
    )
}

export default Donation
