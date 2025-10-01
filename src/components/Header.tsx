import { useAppContext } from "../context/Context"
import search from '../assets/images/icon-search.svg'

const Header = () => {
const { city, setCity } = useAppContext()

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
  };
  return (
    <div className="px-2.5 sm:px-5 md:px-10 lg:px-24 mt-20 flex flex-col gap-5 items-center">
        <h2 className='text-white font-bold text-3xl sm:text-4xl'>How's the sky looking today?</h2>
        <form action="" onSubmit={(e) => handleSubmit(e)} className="flex items-center gap-2 mt-4 w-full justify-center max-w-[500px]">
            <div className="bg-[#25253f] flex items-center py-1 px-3 rounded-md">
                <img src={search} alt="" className="size-4.5"/>
                <input 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text" 
                    id="city" 
                    name="city" 
                    placeholder="Search for a place..."
                    className="outline-0 py-1 px-3 text-gray-200 text-sm w-full"
                />
            </div>
            <button type="submit" className="cursor-pointer text-white py-2 px-3 rounded-md bg-[#4657d9] text-sm">Search</button>
        </form>
    </div>
  )
}

export default Header
