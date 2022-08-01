import React from "react";
import spinnerImage from "../../assets/image/spinning-loading.gif"
let Spinner = () => {
    return(
        <React.Fragment>
            <div>
                <img src={spinnerImage} alt="" className="d-block -m-auto " style={{width:'100%', height:'100%'}}/>
            </div>
        </React.Fragment>
    )
}

export default Spinner
