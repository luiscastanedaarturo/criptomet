import React, { useEffect, useState } from 'react'
import Factura from "./Factura";
import { db } from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import firebase from 'firebase/compat/app';

// const facturass = [
//     {
//         monto:375,
//         id:1,
//         nombre:"Edward Pizzurro",
//         cedula: "27545164",
//         fecha: "2021/10/28",
//         text: "Pago 5 materias noviembre 2021"
//     }
// ]

function Facturas() {

    const [facturas, setFacturas] = useState([]);
    const [time_created, setTimeCreated] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const getLinks = async () => {

        if (firebase.auth().currentUser.email=="admin@correo.unimet.edu.ve") {
            
            const q = query(collection(db, "facturas"));
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id});
            });
            setFacturas(docs);
            
        } else {
            const q = query(collection(db, "facturas"), where("authorId", "==", firebase.auth().currentUser.uid));
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id});
            });
            setFacturas(docs);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Estas seguro que deseas eliminar esta factura?')) {
            await db.collection('facturas').doc(id).delete();
            getLinks();
        }
    }
    
    const facturasFiltradas = (facturas) =>{
        const ff = facturas.filter((factura) => {
            if (searchTerm == "") {
                return factura
            }
            //AQUI SE PONE POR LO QUE QUIERES FILTRAR
            if (factura.nombre.toLowerCase().includes(searchTerm.toLowerCase())) {
                return factura
            }
        })
        return ff
    }

    const downloadTxtFile = () => {

        const element = document.createElement("a");

        const stringData = facturasFiltradas(facturas).reduce((result, item) => {
            return `${result}Nombre:${item.nombre},CI:${item.cedula},Monto:${item.monto},Fecha:${item.fecha};\n`
          }, "")

        const file = new Blob([stringData], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element);
        element.click();
    };


    var seleccion = 2;
    function settSeleccion(number) {
        seleccion = number
        console.log(seleccion);
    }

    useEffect(() => {

        // const article = { 'version': '1',
        //     'key':'c534692c418b595d36d6cb8940fecf680ded6bb29be733b265fa54f378df5f25',
        //     'cmd':'get_tx_info',
        //     'txid':'CPFJ1MNABUVQACBVTRSQBBJUFY'
        // };
        // const headers = { 
        //     // 'mode':'non-cors',
        //     // // 'Access-Control-Allow-Origin': 'http://localhost:3000',
        //     // // 'Access-Control-Allow-Methods': 'POST',
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //     'HMAC':'7794db247500cece46e33d9f3565f3d325b8846c4b28b02f387b9e8d0cccea57c107ece9cc07d70ec5235726d0d78d809a04f0ad88f9bfaaac13a6c0802d1d30'
        // };
        // axios.post('https://www.coinpayments.net/api.php', article, { headers })
        //     .then(response => console.log(response));

//this.setTimeCreated({ time_created: response.data.time_created })
        getLinks();
    }, []);

    

    if (firebase.auth().currentUser.email=="admin@correo.unimet.edu.ve") {
        return (
            //ES ADMIN
            <div className="container d-flex justify-content-center h-100 align-items-center">  
                <div className="container align-items-center">
                    <div className="row">
                        <h1 className="text-center">Facturas</h1>
                    </div>
                    <br/>
                    <br/>

                    <div className="row">

                        <div className="card mb-3 col-md-8 bg-dark animate__animated animate__fadeInUp container">

                            <div className="row">
                                <h1 className="text-center card-body text-light">Filtrar</h1>
                            </div>

                            <div className='row'>
                                <input 
                                    type='text'
                                    placeholder='filtro'
                                    onChange={(event) => {
                                        setSearchTerm(event.target.value);
                                    }}
                                />
                            </div>

                            <div className='row'>
                                <div className="col-md-3 d-flex">
                                <button onClick={()=>settSeleccion(1)} className="btn btn-outline rounded-0 text-center card-body text-light">Nombre</button>
                                </div>
                                <div className="col-md-3 d-flex">
                                <button onClick={()=>settSeleccion(2)} className="btn rounded-0 text-center card-body text-light">Cédula</button>
                                </div>
                                <div className="col-md-3 d-flex">
                                <button onClick={()=>settSeleccion(3)} className="btn rounded-0 text-center card-body text-light">Monto</button>
                                </div>
                                <div className="col-md-3 d-flex">
                                <button onClick={()=>settSeleccion(4)} className="btn rounded-0 text-center card-body text-light">Fecha</button>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3 col-md-8 bg-dark animate__animated animate__fadeInUp container">
                            <div className='row'>
                                <div onClick={downloadTxtFile} className="btn bg-dark rounded-0 text-light">Descargar facturas</div>  
                            </div>
                        </div>

                    </div>
                    <br/> 
                    <div className="row">
                    {
                        facturasFiltradas(facturas).map((factura) => {
                            return(
                            <div className="container d-flex justify-content-center h-100 align-items-center">
                                <div className="row" key={factura.id}> 
                                    <div className="col-md-11"> 
                                        <Factura title={factura.monto} text={factura.descripcion} fecha={factura.fecha} nombre={factura.nombre} cedula={factura.cedula}/> 
                                    </div> 
                                    <div className="col-md-1"> 
                                        <div onClick={downloadTxtFile} className="btn bg-dark rounded-5 text-light">x</div>  
                                    </div> 
                                </div> 
                            </div>
                            );
                        })
                    } 
                    </div>
                </div>
            </div>
        )
    } else {

        //NO ES ADMIN
        return (
            <div className="container d-flex justify-content-center h-100 align-items-center">   
              <div className="container align-items-center">
                <div className="row">
                  <h1 className="text-center">Facturas</h1>
                </div>
                <br/>
                <br/>
                <div className="row">
                  {
                      facturas.map(factura => (
                          <div className="container d-flex justify-content-center h-100 align-items-center">
                            <div className="row" key={factura.id}> 
                                <div className="col-md-11"> 
                                    <Factura title={factura.monto} text={factura.descripcion} fecha={factura.fecha} nombre={factura.nombre} cedula={factura.cedula}/> 
                                </div> 
                                <div className="col-md-1"> 
                                    <div onClick={() => handleDelete(factura.id)} className="btn btn-outline-primary bg-dark rounded-0 text-light">x</div>  
                                </div> 
                            </div> 
                          </div>
                      ))
                  } 
                </div>
              </div>
            </div>
        )
    }
}

export default Facturas



// if (seleccion==1) {
//     if (factura.cedula.toLowerCase().includes(searchTerm.toLowerCase())) {
//         return factura
//     }
// }
// else if (seleccion==2) {
//     if (factura.cedula.toLowerCase().includes(searchTerm.toLowerCase())) {
//         return factura
//     }
// }
// else if (seleccion==3) {
//     if (factura.monto.toLowerCase().includes(searchTerm.toLowerCase())) {
//         return factura
//     }
// }
// else {
//     if (factura.fecha.toLowerCase().includes(searchTerm.toLowerCase())) {
//         return factura
//     }
// }




// facturas.filter((factura) => {
//     if (searchTerm == "") {
//         return factura
//         //AQUI SE PONE POR LO QUE SE QUIERE FILTRAR "factura.loQUeSeQuiereFiltrar"
//     }

//     if (factura.cedula.toLowerCase().includes(searchTerm.toLowerCase())) {
//         return factura
//     }

// }).map((factura) => {
//     return(
//     <div className="container d-flex justify-content-center h-100 align-items-center">
//         <div className="row" key={factura.id}> 
//             <div className="col-md-11"> 
//                 <Factura title={factura.monto} text={factura.descripcion} fecha={factura.fecha} nombre={factura.nombre} cedula={factura.cedula}/> 
//             </div> 
//             <div className="col-md-1"> 
//                 <div onClick={downloadTxtFile} className="btn btn-outline-primary bg-dark rounded-0 text-light">x</div>  
//             </div> 
//         </div> 
//     </div>
//     );
// })