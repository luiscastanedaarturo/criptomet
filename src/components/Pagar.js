import React from 'react'

function Pagar() {
    return (
        <div className="container justify-content-center h-100 align-items-center animate__animated animate__fadeInUp">

            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <h1 cla>¿Qué deseas pagar este mes?</h1>
                </div>
            </div>

            <br/>
            
            <div className="row justify-content-md-center">
                <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                        <h3 className="card-title">Inscripción</h3>
                    </div>
                </div>
                <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                        <h3 className="card-title">Seguro Estudiantil</h3>
                    </div>
                </div>
            </div>

            <br/>

            <div className="row justify-content-md-center">
                <div class="col-md-auto">
                    <h3 className="card-title">Cantidad de materias</h3>
                    <div>
                        <a>1</a>
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                        <a>2</a>
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                        <a>3</a>
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                        <a>4</a>
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                        <a>5</a>
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                        <a>6</a>
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                        <a>7</a>
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                        <a>8</a>
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagar
