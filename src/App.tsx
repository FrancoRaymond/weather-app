import { AppProvider } from './context/Context';
import Navbar from "./components/Navbar"
import ErrorPage from './components/ErrorPage'

function App() {

  
  return (
    <AppProvider>
      <Navbar />
      <ErrorPage />
    </AppProvider>
  )
}

export default App
