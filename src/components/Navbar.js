import React from 'react'

import "./Content.css"

// Importación del react-router-dom
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

// Importación de los componentes que se renderizan
import Cards from "./Cards";
import Pagar from "./Pagar";
import PagarCoinPayments from './PagarCoinPayments';
import Facturas from "./Facturas";
import Guias from "./Guias";
import InicioSesion from "./InicioSesion";
import Registro from './Registro';

function Navbar() {
    return (
        <div>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid" >
                        <Link  className="navbar-brand" to="/">CriptoMet</Link >
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> 
                        <div className="collapse navbar-collapse justify-content-center" id="navbarToggleExternalContent">
                            <ul className="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/">Pagar</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/facturas">Facturas</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/tutoriales">Tutoriales</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/guia">Guía</Link>
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to="/iniciosesion">Cerrar Sesión</Link>
                            </li>
                        </ul> 
                    </div>
                </nav>

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
                            <Cards />
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

export default Navbar
