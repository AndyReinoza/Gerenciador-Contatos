import React from "react";
import {Link} from 'react-router-dom'

function NavBar() {
    return(
        <React.Fragment>
           <nav className="navbar navbar-light  bg-light navbar-expand-sm" style={{"background-color": "#3d46f2"}}>
                <div className="container">
                    <Link to={'/'} className=" navbar-brand" >
                        <b className=" text-danger">📞 App Gestão Contatos </b></Link>
                </div>
           </nav>
        </React.Fragment>
    )
 };

 export default NavBar;