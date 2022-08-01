import React from "react";
import {Link} from "react-router-dom";


function ViewContact() {
    return(
        <React.Fragment>
            <section className="view-contact-intro p-3">
                <div className="comtainer">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-light"> Olhear o Contato </p>
                            <p className="fst-italic text-light"> Você vai a ter seus contactos aqui 📔</p>
                        </div>
                    </div>
                </div>
            </section>
            <section  className="view-contact mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="" className="contact-img " />
                        </div>
                        <div className="col-md-8">
                            <ul className="list-group align-items-center">
                                <li className="list-group-item list-group-item-action">
                                    Name: <span className="fw-bold">Vitalik</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Mobile Number: <span className="fw-bold">+552454762131</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Email: <span className="fw-bold">Vitalik@ethereum.org</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/contacts/list'} className="btn btn-light">Voltar</Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
 };

 export default ViewContact;