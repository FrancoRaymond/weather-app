import { AppProvider } from './context/Context';
import Navbar from "./components/Navbar"
import Header from './components/Header';
import Loader from './components/Loader';

function App() {

  
  return (
    <AppProvider>
      <Navbar />
      <Header />
      <Loader />
    </AppProvider>
  )
}

export default App
