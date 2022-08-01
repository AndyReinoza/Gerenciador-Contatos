import React from "react";
import {Link} from "react-router-dom"

function EditContact() {
    return(
        <React.Fragment>
          <section className="add-contact">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-light fw-bold ">Editar contato cadastrado</p>
                        <p className="fst-italic text-light"> Pode editar as informações do seu contato✍</p>
                    </div>
                </div>
                <div className="row aling-items-center">
                    <div className="col-md-4">
                        <form>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Nome"/>
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Url da foto"/>
                            </div>                            <div className="mb-2">
                                <input type="number" className="form-control" placeholder="Telefone"/>
                            </div>                            <div className="mb-2">
                                <input type="email" className="form-control" placeholder="Correio eletrónico."/>
                            </div>
                            <div className="mb-2">
                                <input type="submit" className="btn btn-success" value="Atualizar"/>
                                <Link to={'/contacts/list'} className="btn btn-danger ms-2"> Cancelar </Link>
                            </div>
                            
                        </form>
                    </div>
                    <div className="col-md-6">
                        <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="" className="contact-img " />
                    </div>
                </div>
            </div>
          </section>
        </React.Fragment>
    )
 };

 export default EditContact;