import React, { useState } from "react";
import {  Link, useNavigate} from "react-router-dom";
import { ContactService } from "../../../services/ContactService";

function AddContact() {

let navigate = useNavigate();

let [state, setState] = useState({
    loading: false,
    contatos:{
        nome: '',
        foto: '',
        email: '',
        telefone: '',
        
    },
    errorMessage:'',
});

let updateInput = (event) => {
    setState({
        ...state,
        contatos:{
            ...state.contatos,
            [event.target.name] : event.target.value
            
        }
    })
}

let submitForm = async (event) => {
    event.preventDefault();
    try {
        let response = await ContactService.createContact(state.contatos);
        if (response ) {
            navigate('/contacts/list', {replace: true})
        } 
    } catch (error) {
        setState({
            ...state , errorMessage: error.message})
            navigate('/contacts/add', {replace: false});
        
    }
};


 

    return(
        <React.Fragment>
            
          <section className="add-contact">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-light fw-bold ">Criar contato novo</p>
                        <p className="fst-italic text-light"> Pode botar as informações do seu contato✍</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <form onSubmit={submitForm}>
                            <div className="mb-2">
                                <input required={true} name="nome" value={state.contatos.nome} onChange={updateInput} type="text" className="form-control" placeholder="Nome"/>
                            </div>
                            <div className="mb-2">
                                <input  required={true} name="foto" value={state.contatos.foto} onChange={updateInput} type="text" className="form-control" placeholder="Url da foto"/>
                            </div>                            <div className="mb-2">
                                <input  required={true} name="telefone" value={state.contatos.telefone} onChange={updateInput} type="number" className="form-control" placeholder="Telefone"/>
                            </div>                            <div className="mb-2">
                                <input  required={true} name="email" value={state.contatos.email} onChange={updateInput}type="email" className="form-control" placeholder="Correio eletrónico."/>
                            </div>
                            <div className="mb-2">
                                <input type="submit" className="btn btn-success" value="Criar"/>
                                <Link to={'/contacts/list'} className="btn btn-danger ms-2"> Cancelar </Link>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
          </section>
        </React.Fragment>
    )
 };

 export default AddContact;