import { useState } from "react";
import { useAppContext } from "../context/Context";
import down from '../assets/images/arrow-down.svg'
import unitsIcon from '../assets/images/icon-units.svg'
import checkMark from '../assets/images/icon-checkmark.svg'

export default function UnitsSelect() {
  const { 
    temperature, 
    setTemperature, 
    windSpeed, 
    setWindSpeed, 
    precipitation, 
    setPrecipitation 
  } = useAppContext();
  
  const [open, setOpen] = useState<boolean>(false);
  const defaultValue:string ="Units";
 
  return (
    <div className="relative w-fit text-[12px] text-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-fit flex justify-between items-center px-2 gap-2 py-1 rounded-lg bg-[#25253f]"
      >
        <img src={unitsIcon} alt="" className="size-4" />
        {defaultValue}
        <img src={down} alt=""  className="size-5"/>
      </button>

      {open && (
        <div className="absolute mt-1 w-[200px] rounded-lg bg-[#25253f] border border-gray-700 shadow right-0 overflow-hidden p-2">
          <span className="font-semibold ml-1.5">Switch to imperial</span>
          <div className="flex flex-col items-start mt-2 gap-1 border-b border-gray-700 py-1.5">
            <span className="text-gray-300 font-semibold ml-1.5">Temperature</span>
            <button 
              onClick={() => setTemperature('celsius')} 
              className={` ${temperature === 'celsius' ? 'bg-[#2f2f49]' : ''} font-semibold px-1.5 py-2 hover:bg-gray-700 rounded-md w-full text-left cursor-pointer flex items-center justify-between`}
            >
              <span className="text-[12px]">Celsius(C)</span>
              <img src={checkMark} alt="" className={`${temperature === 'celsius' ? 'block' : 'hidden'}`}/>
            </button>
            <button 
              onClick={() => setTemperature('fahrenheit')} 
              className={` ${temperature === 'celsius' ? '' : 'bg-[#2f2f49]'} font-semibold px-1.5 py-2 hover:bg-gray-700 rounded-md w-full text-left cursor-pointer flex items-center justify-between`}
            >
              <span className="text-[12px]">Fahrenheit(F)</span>
              <img src={checkMark} alt="" className={`${temperature === 'celsius' ? 'hidden' : 'block'}`}/>
            </button>
          </div>
          <div className="flex flex-col items-start mt-2 gap-1 border-b border-gray-700 py-1.5">
            <span className="text-gray-300 font-semibold ml-1.5">Wind Speed</span>
            <button 
              onClick={() => setWindSpeed('km/h')} 
              className={` ${windSpeed === 'km/h' ? 'bg-[#2f2f49]' : ''} font-semibold px-1.5 py-2 hover:bg-gray-700 rounded-md w-full text-left cursor-pointer flex items-center justify-between`}
            >
              <span className="text-[12px]">km/h</span>
              <img src={checkMark} alt="" className={`${windSpeed === 'km/h' ? 'block' : 'hidden'}`}/>
            </button>
            <button 
              onClick={() => setWindSpeed('mph')} 
              className={` ${windSpeed === 'km/h' ? '' : 'bg-[#2f2f49]'} font-semibold px-1.5 py-2 hover:bg-gray-700 rounded-md w-full text-left cursor-pointer flex items-center justify-between`}
            >
              <span className="text-[12px]">mph</span>
              <img src={checkMark} alt="" className={`${windSpeed === 'km/h' ? 'hidden' : 'block'}`}/>
            </button>
          </div>
          <div className="flex flex-col items-start mt-2 gap-1 border-b border-gray-700 py-1.5">
            <span className="text-gray-300 font-semibold ml-1.5">Precipitation</span>
            <button 
              onClick={() => setPrecipitation('millimeters')} 
              className={` ${precipitation === 'millimeters' ? 'bg-[#2f2f49]' : ''} font-semibold px-1.5 py-2 hover:bg-gray-700 rounded-md w-full text-left cursor-pointer flex items-center justify-between`}
            >
              <span className="text-[12px]">Millimeters(mm)</span>
              <img src={checkMark} alt="" className={`${precipitation === 'millimeters' ? 'block' : 'hidden'}`}/>
            </button>
            <button 
              onClick={() => setPrecipitation('inches')} 
              className={` ${precipitation === 'millimeters' ? '' : 'bg-[#2f2f49]'} font-semibold px-1.5 py-2 hover:bg-gray-700 rounded-md w-full text-left cursor-pointer flex items-center justify-between`}
            >
              <span className="text-[12px]">Inches(in)</span>
              <img src={checkMark} alt="" className={`${precipitation=== 'millimeters' ? 'hidden' : 'block'}`}/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}