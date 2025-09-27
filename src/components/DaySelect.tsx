import { useState } from "react";
import { useAppContext } from "../context/Context";
import down from '../assets/images/arrow-down.svg'


export default function UnitsSelect() {
    const [open, setOpen] = useState<boolean>(false);
    const { day, setDay } = useAppContext();
  
  return (
    <div className="relative w-fit text-sm text-white mx-auto">
      <button
        onClick={() => setOpen(!open)}
        className="w-fit text-[12px] flex justify-between items-center px-2 gap-2 py-1 rounded-lg bg-[#25253f]"
      >
        {day}
        <img src={down} alt=""  className="size-5"/>
      </button>

      {open && (
        <div className="absolute mt-1 w-[160px] rounded-lg bg-[#25253f] border border-gray-700 shadow right-0 overflow-hidden p-2 text-white">
            <button onClick={() => setDay('Monday')} className={` ${day === 'Monday' ? 'bg-[#2f2f49]' : ''} text-[12px] px-1.5 py-2 hover:bg-gray-700 rounded-md w-full text-left cursor-pointer flex items-center justify-between`}>Monday</button>
            <button onClick={() => setDay('Tuesday')} className={` ${day === 'Tuesday' ? 'bg-[#2f2f49]' : ''} text-[12px] px-1.5 py-2 hover:bg-gray-700 rounded-md w-full text-left cursor-pointer flex items-center justify-between`}>Tuesday</button>
            <button onClick={() => setDay('Wednesday')} className={` ${day === 'Wednesday' ? 'bg-[#2f2f49]' : ''} text-[12px] px-1.5 py-2 hover:bg-gray-700 rounded-md w-full text-left cursor-pointer flex items-center justify-between`}>Monday</button>
            <button onClick={() => setDay('Thursday')} className={` ${day === 'Thursday' ? 'bg-[#2f2f49]' : ''} text-[12px] px-1.5 py-2 hover:bg-gray-700 rounded-md w-full text-left cursor-pointer flex items-center justify-between`}>Wednesday</button>
            <button onClick={() => setDay('Friday')} className={` ${day === 'Friday' ? 'bg-[#2f2f49]' : ''} text-[12px] px-1.5 py-2 hover:bg-gray-700 rounded-md w-full text-left cursor-pointer flex items-center justify-between`}>Thursday</button>
            <button onClick={() => setDay('Saturday')} className={` ${day === 'Saturday' ? 'bg-[#2f2f49]' : ''} text-[12px] px-1.5 py-2 hover:bg-gray-700 rounded-md w-full text-left cursor-pointer flex items-center justify-between`}>Friday</button>
            <button onClick={() => setDay('Sunday')} className={` ${day === 'Sunday' ? 'bg-[#2f2f49]' : ''} text-[12px] px-1.5 py-2 hover:bg-gray-700 rounded-md w-full text-left cursor-pointer flex items-center justify-between`}>Sunday</button>
        </div>
      )}
    </div>
  );
}