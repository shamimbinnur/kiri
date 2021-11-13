import React from 'react'
import game from "../images/game.svg"
import game2 from "../images/game2.svg"
import currency from "../images/currency.svg"
import security from "../images/security.svg"
import music from "../images/music.svg"
import karaoke from "../images/karaoke.svg"


function Feature() {
    return (
        <section id="features">
            <div className="text-3xl flex justify-center items-center gap-x-3 text-kiri-blue text-center m-8 " >
                <i class="fas fa-bahai"></i>
                <h1>Features</h1>
            </div>

            {/* Game Section */}
            <div className="relative mt-20 lg:mt-40  ">
                <div className="container flex flex-col lg:flex-row  items-center gap-x-24">
                    {/* <!-- Image --> */}
                    <div className="flex flex-1 justify-center z-10 lg:mb-0">
                        <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/5 md:w-full md:h-full" src={game2} alt=""/>
                    </div>
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className="text-kiri-blue  text-2xl " >Game</h1>
                        <p className="text-gray-400 text-center my-4 lg:text-left sm:w-3/4 lg:w-full">
                        Over 10 fun games to challenge you and others members (heavily integrated with currency)

                        </p>
                    </div>
                </div>
                {/* <!-- Rounded Reactangle --> */}
                <div className="hidden lg:block overflow-hidden  bg-kiri-1 rounded-r-full absolute h-80 w-2/4 -bottom-24  ">
                </div>
            </div>

            {/* reCAPTCHA  */}
            <div className="relative mt-20 lg:mt-40  ">
                <div className="container flex flex-col lg:flex-row-reverse  items-center gap-x-24">
                    {/* <!-- Image --> */}
                    <div className="flex flex-1 justify-center z-10 lg:mb-0">
                        <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/5 md:w-full md:h-full" src={security} alt=""/>
                    </div>
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className="text-kiri-blue  text-2xl " > reCAPTCHA</h1>
                        <p className="text-gray-400 text-center my-4 lg:text-left sm:w-3/4 lg:w-full">
                        Verification with reCAPTCHA integrate world-class captcha in front of your server portal, eliminate bots and spam.

                        </p>
                    </div>
                </div>
                {/* <!-- Rounded Reactangle --> */}
                <div className="hidden lg:block overflow-hidden  bg-kiri-2 rounded-l-full absolute h-80 w-2/4 -bottom-24 right-0  ">
                </div>
            </div>

            {/* Fun Currency System */}
            <div className="relative mt-20 lg:mt-40  ">
                <div className="container flex flex-col lg:flex-row  items-center gap-x-24">
                    {/* <!-- Image --> */}
                    <div className="flex flex-1 justify-center z-10 lg:mb-0">
                        <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/5 md:w-full md:h-full" src={currency} alt=""/>
                    </div>
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className="text-kiri-blue  text-2xl " >Fun Currency System </h1>
                        <p className="text-gray-400 text-center my-4 lg:text-left sm:w-3/4 lg:w-full">
                        Fun currency system allows you to buy seeds and grow plants, as well as buying other items

                        </p>
                    </div>
                </div>
                {/* <!-- Rounded Reactangle --> */}
                <div className="hidden lg:block overflow-hidden  bg-kiri-1 rounded-r-full absolute h-80 w-2/4 -bottom-24  ">
                </div>
            </div>

            {/* Fun Karauke*/}
            <div className="relative mt-20 lg:mt-40  ">
                <div className="container flex flex-col lg:flex-row-reverse  items-center gap-x-24">
                    {/* <!-- Image --> */}
                    <div className="flex flex-1 justify-center z-10 lg:mb-0">
                        <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/5 md:w-full md:h-full" src={karaoke} alt=""/>
                    </div>
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className="text-kiri-blue  text-2xl " > Fun Karauke</h1>
                        <p className="text-gray-400 text-center my-4 lg:text-left sm:w-3/4 lg:w-full">
                        Unique karaoke feature send lyrics in real-time for your playing song!

                        </p>
                    </div>
                </div>
                {/* <!-- Rounded Reactangle --> */}
                <div className="hidden lg:block overflow-hidden  bg-kiri-2 rounded-l-full absolute h-80 w-2/4 -bottom-24 right-0  ">
                </div>
            </div>

            {/* Music */}
            <div className="relative mt-20 lg:mt-40  ">
                <div className="container flex flex-col lg:flex-row  items-center gap-x-24">
                    {/* <!-- Image --> */}
                    <div className="flex flex-1 justify-center z-10 lg:mb-0">
                        <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/5 md:w-full md:h-full" src={music} alt=""/>
                    </div>
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className="text-kiri-blue  text-2xl " >Music</h1>
                        <p className="text-gray-400 text-center my-4 lg:text-left sm:w-3/4 lg:w-full">
                        Stable, high quality music allows you to play music from a variety of sources

                        </p>
                    </div>
                </div>
                {/* <!-- Rounded Reactangle --> */}
                <div className="hidden lg:block overflow-hidden  bg-kiri-1 rounded-r-full absolute h-80 w-2/4 -bottom-24  ">
                </div>
            </div>

            {/* Game Section */}
            <div className="relative mt-20 lg:mt-40  ">
                <div className="container flex flex-col lg:flex-row-reverse  items-center gap-x-24">
                    {/* <!-- Image --> */}
                    <div className="flex flex-1 justify-center z-10 lg:mb-0">
                        <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/5 md:w-full md:h-full" src={game} alt=""/>
                    </div>
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className="text-kiri-blue  text-2xl " >Game</h1>
                        <p className="text-gray-400 text-center my-4 lg:text-left sm:w-3/4 lg:w-full">
                        Over 10 fun games to challenge you and others members (heavily integrated with currency)

                        </p>
                    </div>
                </div>
                {/* <!-- Rounded Reactangle --> */}
                <div className="hidden lg:block overflow-hidden  bg-kiri-2 rounded-l-full absolute h-80 w-2/4 -bottom-24 right-0  ">
                </div>
            </div>




        </section>
    )
}

export default Feature
