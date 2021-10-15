import React, {useState} from 'react'
import { useAuth } from '../context/AuthContext';
import { AuthProvider } from '../context/AuthContext';
import { PrivateRoute } from './PrivateRoute';

import "./Content.css"

// Importación del react-router-dom
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// Importación de los componentes que se renderizan
import Tutoriales from "./Tutoriales";
import Pagar from "./Pagar";
import PagarCoinPayments from './PagarCoinPayments';
import Facturas from "./Facturas";
import Guias from "./Guias";
import InicioSesion from "./InicioSesion";
import Registro from './Registro';

import { Navbar , Container, Nav } from 'react-bootstrap';

function Header() {

    // const [error, setError] = useState('');
    // const { currentUser, logout } = useAuth();

    // const handleLogout = async () => {
    //     try {
    //         await logout();
    //     } catch (error) {
    //         setError('Server error');
    //     }
    // }

    return (
        <div>
            <AuthProvider>
            <Router>
                <Navbar bg="dark" expand="lg" className="navbar-dark">
                    <Container>
                        <Link  className="navbar-brand" to="/">
                        CriptoMet
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Container>
                                <Nav className="me-auto">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Pagar</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/facturas">Facturas</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/tutoriales">Tutoriales</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/guia">Guía</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/iniciosesion">Cerrar Sesion</Link>
                                        </li>
                                    </ul>
                                </Nav>
                            </Container>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div className="content">
                    {/*Rutas hacia los distintos componentes*/} 
                    <Switch>
                        {/*Ruta principal, la cual muestra el componente de Pagar*/} 
                        <PrivateRoute path="/" exact component={Pagar}/>
                        
                        {/*Ruta de página para pagar con CoinPayments, la cual muestra el componente de PagarCoinPayments*/} 
                        <PrivateRoute path="/CoinPayments" exact component={PagarCoinPayments}/>
                        
                        {/*Ruta de facturas, la cual muestra el componente de Facturas*/} 
                        <PrivateRoute path="/facturas" component={Facturas}/>
                        
                        {/*Ruta de tutoriales, la cual muestra el componente de Tutoriales*/}
                        <PrivateRoute  path="/tutoriales" component={Tutoriales}/>
                        
                        {/*Ruta de guía, la cual muestra el componente de Guia*/}
                        <PrivateRoute path="/guia" component={Guias}/>

                        {/*Ruta de inicio de sesion, la cual muestra el componente de InicioSesion*/}
                        <PrivateRoute path="/iniciosesion" component={InicioSesion}/>

                        {/*Ruta de registro, la cual muestra el componente de Registro*/}
                        <PrivateRoute path="/registro" component={Registro}/>

                    </Switch>
                </div>

            </Router> 
            </AuthProvider>
            
        </div>
    )
}

export default Header
