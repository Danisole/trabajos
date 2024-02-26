import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/pages/Inicio'
import Nosotros from './components/pages/Nosotros';
import Suscribete from './components/pages/Suscribete';
import Error from './components/pages/Error';
import WhatsappBtn from './components/pequeñosComponentes/WhatsappBtn';
import Footer from './components/footer/Footer';
import Header from './components/pages/Header';




  function App() {
    return (

        <div className='App'>

          <BrowserRouter>
            <Navbar/>
            <Header/>
            <Routes>
              <Route path='/' exact element={<Inicio/>}/>
              <Route path='/nosotros' element={<Nosotros/>}/>
              <Route path='/suscribete' element={<Suscribete/>}/>
              <Route path='*' element={<Error/>} />
            </Routes>
          </BrowserRouter>
          <WhatsappBtn/>         

                
          <Footer/>
        </div>
    );
  }

  export default App;
