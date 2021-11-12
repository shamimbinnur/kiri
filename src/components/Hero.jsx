import React from 'react'
import Kiri from "../images/kiri.jpeg"

function Hero() {
    return (
        <section className=" bg-hero-pattern bg-no-repeat bg-center ">
            <div className="container flex justify-center p-6">
                {/* Photo & Branding */}
                <div>
                    <div className=" h-64 w-64  rounded-full overflow-hidden border-4 border-kiri-1 mt-4 mb-8 p-0">
                        <img className="w-full h-full object-cover" src={Kiri} alt="kiri" />
                    </div>
                    <h1 className="text-8xl text-center text-kiri-2 font-medium mb-1 " >Kiri</h1>
                    <div className=" text-xl text-kiri-blue ">
                        <h1 className="text-center">Lorem Ipsum</h1>
                    </div>
                </div>
            </div>          
        </section>
    )
}

export default Hero
