import { AppProvider } from './context/Context';
import Navbar from "./components/Navbar"
import Header from './components/Header';

function App() {

  
  return (
    <AppProvider>
      <Navbar />
      <Header />
    </AppProvider>
  )
}

export default App
