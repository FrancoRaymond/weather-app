import logo from '../assets/images/logo.svg'
import CustomSelect from './CustomSelect'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-2.5 sm:px-5 md:px-10 lg:px-24 py-1.5'>
        <img src={logo} alt="" className='h-7'/>
        <CustomSelect />
    </div>
  )
}

export default Navbar
