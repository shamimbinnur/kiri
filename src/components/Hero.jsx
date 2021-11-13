import React from 'react'
import Kiri from "../images/kiri.jpeg"

function Hero() {
    return (
        <section className=" bg-hero-pattern bg-no-repeat bg-center ">
            <div className="container mx-auto p-10 md:py-24  ">
                {/* Photo & Branding */}
                    <div className="flex flex-col justify-center  items-center mb-10">
                        <h1 className="text-8xl text-center text-kiri-2 font-medium mb-1 " >Kiri</h1>
                        <h1 className="text-center text-xl  text-gray-700">"I'm Kiri, an assistant that provides all around entertainment and fun to your server with games, memes and economy (o^▽^o)" i think</h1>
                    </div>
                    
                    <div className=" flex flex-col items-center justify-center ">
                        <div className=" h-64 w-64  rounded-full overflow-hidden border-4 border-kiri-1 mt-4 mb-8 p-0">
                            <img className="w-full h-full object-cover" src={Kiri} alt="kiri" />
                        </div>  
                        <button className="w-44 h-14 mt-5 hover:bg-gray-100 duration-500 ease-in-out hover:text-kiri-blue hover:border-gray-900 transition-all  rounded-full border-2 border-dashed border-gray-100 bg-kiri-blue font-bold text-gray-200 text-lg "> <a href=""> ADD TO DISCORD </a></button>   
                    </div>
            </div>          
        </section>
    )
}

export default Hero