//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';
import Menu from './Menu/Menu'
import Footer from './Components/Footer/Footer';
function App() {
  

  return (
    <>
    
    <Menu/>

    <div className="container">
       <Hero/>
       <Footer/>
       
    </div>
    
    
    <Navbar/> 

    
    
    
       
    </>
  )
}

export default App
