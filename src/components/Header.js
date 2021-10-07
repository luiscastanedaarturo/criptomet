import React from 'react'

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
    return (
        <div>
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
                        <Route path="/" exact>
                            <Pagar/>
                        </Route>
                        {/*Ruta de página para pagar con CoinPayments, la cual muestra el componente de PagarCoinPayments*/} 
                        <Route path="/CoinPayments" exact>
                            <PagarCoinPayments/>
                        </Route>
                        {/*Ruta de facturas, la cual muestra el componente de Facturas*/} 
                        <Route path="/facturas">
                            <Facturas/>
                        </Route>
                        {/*Ruta de tutoriales, la cual muestra el componente de Tutoriales*/}
                        <Route path="/tutoriales">
                            <Tutoriales />
                        </Route>
                        {/*Ruta de guía, la cual muestra el componente de Guia*/}
                        <Route path="/guia">
                            <Guias/>
                        </Route>
                        {/*Ruta de inicio de sesion, la cual muestra el componente de InicioSesion*/}
                        <Route path="/iniciosesion">
                            <InicioSesion/>
                        </Route>
                        {/*Ruta de registro, la cual muestra el componente de Registro*/}
                        <Route path="/registro">
                            <Registro/>
                        </Route>
                    </Switch>
                </div>

            </Router> 
        </div>
    )
}

export default Header
