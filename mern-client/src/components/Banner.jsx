import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
    <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/*leftside */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-6xl font-bold leading-snug text-black">Buy And Sell Your Books <span className="text-blue-700">for The Best Prices</span></h2>
          <p className="md:w-4/5">Discover the ultimate platform to buy and sell your books at the best prices, connecting book lovers and sellers in a seamless, reliable, and affordable marketplace.</p>
           <div>
           </div>
       
        </div>
        {/*right side */}
        <div>
            <BannerCard/>
            </div>
            </div>
    </div>
  )
}

export default Banner