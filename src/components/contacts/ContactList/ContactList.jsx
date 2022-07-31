import React from "react";
import {Link} from "react-router-dom";

function ContactList() {
    return(
        <React.Fragment>
           <section className="contact-search p-3">
               <div className="container">
                  <div className="grid">
                    <div className="row">
                        <div className="col">
                        <p className="h3">
                            Gerenciador do Contatos
                            <Link to={"./contacts/add"} className="btn btn-primary ms-2">
                            <i className="fa fa-plus-circle me-2"></i> 
                                 Criar
                            </Link>
                        </p>
                        <p className="fst-italic">
                        Oi! Nesta App Você vai a poder salvar os contatos de você!
                        </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form className="row">
                                <div className="col">
                                    <div className="mb-2">
                                        <input type="text" className="form-control"
                                        placeholder=" Procure seu contato"
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-2">
                                    <input type="submit" className="btn btn-outline-primary"
                                    value="Procurar"
                                        placeholder=" Procure seu contato"/>
                                    </div>
                                </div>
        
                            </form>
                        </div>
                    </div>
                  </div>
               </div>
           </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-4">

                                    </div>
                                    <div className="col-md-7">

                                    </div>
                                    <div className="col-md-1">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
 };

 export default ContactList;