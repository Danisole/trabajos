import React from 'react'


const Footer = () => {
  return (
    <>
    
        <div className='Footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-lg-5 col-12 ft-1' >
                        <h3 className='text-center'>LOGO</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dicta eius, delectus ipsa consequatur vel tempora soluta! Sunt sint cupiditate culpa atque nam. Assumenda accusamus sed quam explicabo, blanditiis exercitationem?</p>
                        <div className='footerIcon text-center'>
                            <i class="fab fa-facebook"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 col-12 ft-2 text-center'>
                        <h5>Accesos</h5>
                        <ul>
                            <li className='nav-item'>
                                <a className='nav-link' href='/'> Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/'> Nosotros</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/'> Suscribete</a>
                            </li>
                        </ul>

                    </div>
                    <div className='col-md-6 col-lg-4 col-12 ft-3 text-center'>
                        <h5>Contacto</h5>
                        <p><i class="fas fa-mobile-alt"></i>+5492645039506</p>
                        <p><i class="fas fa-envelope"></i>info@trabajos.com</p>
                        <p><i class="fas fa-map-marker-alt"></i>calle falsa 123</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='lastFooter'>
            <p>Sitio creado por <a className='nav-link' href='https://www.instagram.com/insidedevsj?utm_source=qr&igsh=aWdrMW02YXRwZm90' target={"_blanc"}>InsideDev</a> </p>
            <p>© 2024 - Todos los derechos reservados</p>
        </div>
    
    </>
  )
}

export default Footer