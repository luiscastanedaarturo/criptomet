import React, { useState } from 'react'
import { db } from '../firebase';
import firebase from 'firebase/compat/app'
import {getAuth, sendEmailVerification} from 'firebase/auth';

// Importación del react-router-dom
import {
    BrowserRouter as Router,
    useHistory
  } from "react-router-dom";

function Pagar() {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var regCedula = /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/;
    var regDescripcion = /^\s*$/;
    var regMonto = /^\d+(\.\d{1,2})?$/;

    const [error1, setError1] = useState(null);
    const [error2, setError2] = useState(null);
    const [error3, setError3] = useState(null);
    const [error4, setError4] = useState(null);

    const initializeStateValues = {
        nombre: "",
        cedula: "",
        descripcion: "",
        monto: "",
        authorId: "",
        fecha: ""
    };

    const [values, setValues] = useState(initializeStateValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value})

        //Nombre
        if (name=='nombre') {
            if (!regName.test(value)) {
                setError1('Error');
            } else {
                setError1('');
            }   
        }

        //Cedula
        if (name=='cedula') {
            if (!regCedula.test(value)) {
                setError2('Error');
            } else {
                setError2('');
            }   
        }

        //Descripcion
        if (name=='descripcion') {
            if (regDescripcion.test(value)) {
                setError3('Error');
            } else {
                setError3('');
            }   
        }

        //Monto
        if (name=='monto') {
            if (!regMonto.test(value)) {
                setError4('Error');
            } else {
                setError4('');
            }   
        }
    };


    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const auth = getAuth();
        if (auth.currentUser.emailVerified) {

            //VALIDACIONES
            if (!regDescripcion.test(values.nombre)) {
                if (!regDescripcion.test(values.cedula)) {
                    if (!regDescripcion.test(values.descripcion)) {
                        if (!regDescripcion.test(values.monto)) {

                            //NINGUN CAMPO ESTA VACIO...
                            if (error1=='') {
                                if (error2=='') {
                                    if (error3=='') {
                                        if (error4=='') {

                                            if (values.monto < 10) {
                                                alert('El monto mínimo para realizar el pago tiene que ser de 10$');
                                            } else {

                                                //TODO BIEN... SE PUEDE HACER EL PAGO...
                                                
                                                values.fecha = getCurrentDate();
                                                values.authorId = firebase.auth().currentUser.uid;

                                                await db.collection('facturas').doc().set(values);
                                                console.log('new factura');
                                                setValues({...initializeStateValues});

                                                history.push({
                                                    pathname: "/CoinPayments",
                                                    state:{ nombre:values.nombre,
                                                        cedula:values.cedula,
                                                        descripcion:values.descripcion,
                                                        monto:values.monto }
                                                });
                                            }

                                
                                        } else { alert('Formato incorrecto. Por favor, completa los campos de manera adecuada para poder procesar el pago'); }
                                    } else { alert('Formato incorrecto. Por favor, completa los campos de manera adecuada para poder procesar el pago'); }
                                } else { alert('Formato incorrecto. Por favor, completa los campos de manera adecuada para poder procesar el pago'); }
                            } else { alert('Formato incorrecto. Por favor, completa los campos de manera adecuada para poder procesar el pago'); }


                        } else { alert('Uno o varios campos están vacíos. Por favor, complétalos para poder procesar el pago'); }
                    } else { alert('Uno o varios campos están vacíos. Por favor, complétalos para poder procesar el pago'); }
                } else { alert('Uno o varios campos están vacíos. Por favor, complétalos para poder procesar el pago'); }
            } else { alert('Uno o varios campos están vacíos. Por favor, complétalos para poder procesar el pago'); }

            

        } else {
            alert('Para realizar pagos, tu correo debe estar verificado. Por favor, verificalo accediendo al link enviado a la dirección de correo que proporcionaste');
        }

    };

    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="card text-center bg-dark col-md-4 animate__animated animate__fadeInUp">
                <img src="" alt=""/> 
                <div className="card-body text-light"> 
                    <h4 className="card-title ">Ventana de pago</h4>
                    <br/>
                    <h6 className="card-title ">Nombre y Apellido</h6>
                    <input value={values.nombre} name="nombre" onChange={handleInputChange} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Ejemplo: John Doe"></input> 
                    {error1 && <p className='error'>{error1}</p>}
                    <br/>
                    <h6 className="card-title ">Cédula</h6>
                    <input value={values.cedula} name="cedula" onChange={handleInputChange} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Ejemplo: 27.000.000"></input> 
                    {error2 && <p className='error'>{error2}</p>}
                    <br/>
                    <h6 className="card-title ">Descripción</h6>
                    <input value={values.descripcion} name="descripcion" onChange={handleInputChange} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Ejemplo: 5 materias, mes de octubre"></input> 
                    {error3 && <p className='error'>{error3}</p>}
                    <br/>
                    <h6 className="card-title ">Monto</h6>
                    <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input value={values.monto} name="monto" onChange={handleInputChange} type="text" class="form-control" placeholder="Ejemplo: 375.00"></input>
                        <span className="input-group-text">USDT</span>
                    </div>
                    {error4 && <p className='error'>{error4}</p>}
                    <p className="text-white">Para proceder por favor haz click en pagar</p>
                    <button onClick={handleSubmit} className="btn btn-outline-secondary rounded-0">Pagar</button>
                    
                    {/* <Link to="/CoinPayments" className="btn btn-outline-secondary rounded-0" target='_blank'>
                        Pagar
                    </Link>

                    <Switch>
                        <Route path="/CoinPayments" component={PagarCoinPayments}/>
                    </Switch> */}

                </div>
            </div>
        </div>
    )
}

export default Pagar


export function getCurrentDate(separator='/'){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}