import Skeleton from "./Skeleton"
import arrowDown from '../assets/images/icon-dropdown.svg'

const Loader = () => {

  return (
    <div className="px-2.5 sm:px-5 md:px-10 lg:px-24 mt-10 flex flex-col md:flex-row gap-5 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-5 gap-6 w-full md:w-[65%]">
            <div className="grid-cols-1 row-span-1 md:row-span-3 md:col-span-4 gap-4">
                <div className="grid grid-cols-2 md:grid-cols-4 md:grid-row-3 gap-3 md:gap-5 md:h-full">
                    <div className="bg-[#29253f] p-10 w-full rounded-md col-span-2 row-span-1 md:col-span-4 md:row-span-2 flex flex-col gap-2 justify-center items-center">
                        <div className="flex gap-1">
                            <div className="size-2.5 rounded-full bg-white animate-bounce "></div>
                            <div className="size-2.5 rounded-full bg-white animate-bounce delay-100"></div>
                            <div className="size-2.5 rounded-full bg-white animate-bounce delay-75"></div>
                        </div>
                        <span className="text-white text-sm">Loading...</span>
                    </div>
                    <div className="bg-[#29253f] p-2 text-white flex flex-col rounded-md">
                        <span className="text-sm">Feels like</span>
                        <span className="mt-2 text-bold text-3xl">-</span>
                    </div>
                    <div className="bg-[#29253f] p-2 text-white flex flex-col rounded-md">
                        <span className="text-sm">Humidity</span>
                        <span className="mt-2 text-bold text-3xl">-</span>
                    </div>
                    <div className="bg-[#29253f] p-2 text-white flex flex-col rounded-md">
                        <span className="text-sm">Wind</span>
                        <span className="mt-2 text-bold text-3xl">-</span>
                    </div>
                    <div className="bg-[#29253f] p-2 text-white flex flex-col rounded-md">
                        <span className="text-sm">Percipitation</span>
                        <span className="mt-2 text-bold text-3xl">-</span>
                    </div>
                </div>
            </div>
            <div className="md:col-span-4 md:row-span-2 flex flex-col gap-2 p-2 w-full">
                <h3 className="text-white text-sm font-semibold">Daily forecast</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-5 mt-4">
                    <div className="bg-[#29253f] py-16 text-white flex flex-col rounded-md"></div>
                    <div className="bg-[#29253f] py-16 text-white flex flex-col rounded-md"></div>
                    <div className="bg-[#29253f] py-16 text-white flex flex-col rounded-md"></div>
                    <div className="bg-[#29253f] py-16 text-white flex flex-col rounded-md"></div>
                    <div className="bg-[#29253f] py-16 text-white flex flex-col rounded-md"></div>
                    <div className="bg-[#29253f] py-16 text-white flex flex-col rounded-md"></div>
                    <div className="bg-[#29253f] py-16 text-white flex flex-col rounded-md"></div>
                </div>
            </div>
        </div>
        <div className="bg-[#29253f] p-3 rounded-md w-full md:w-[35%] flex flex-col gap-4 h-fit">
            <div className="flex justify-between items-center mb-5">
                <span className="text-white text-sm font-semibold">Hourly forecast</span>
                <div className="flex gap-3 items-center cursor-pointer px-1 bg-[#2f2f49] rounded-md">
                    <p className="text-2xl text-bold text-white">-</p>
                    <img src={arrowDown} alt=""  className="mt-1"/>
                </div>
            </div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </div>
    </div>
  )
}

export default Loader
