import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-info">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    LOGO
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Nosotros'>Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Suscribete'>Suscribete</Link>
                        </li>                        
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar