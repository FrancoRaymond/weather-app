import errorIcon from '../assets/images/icon-error.svg'
import retry from '../assets/images/icon-retry.svg'
const ErrorPage = () => {

  return (
    <div className='py-20 px-2.5 sm:px-5 md:px-10 lg:px-24 flex flex-col gap-5 items-center'>
        <img src={errorIcon} alt="" className='size-6'/>
        <h2 className='text-white font-bold text-3xl sm:text-5xl'>Something went wrong</h2>
        <p className='text-gray-300 text-center max-w-[430px]'>We couldn't connect to the server(API error). Please try again in a few moments.</p>
        <button className='bg-[#25253f] flex items-center gap-2 w-fit px-2 py-1 rounded-md'>
            <img src={retry} alt="" />
            <span className='text-gray-200 cursor-pointer text-sm'>Retry</span>
        </button>
    </div>
  )
}

export default ErrorPage
