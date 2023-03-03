import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Nav(){

    const[show , handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll" , () => {
            if(window.scrollY>100){
                handleShow(true);

            }else handleShow(false);
        });
    } , []);
    return(
<>
    <div className= {`nav ${show && "nav_black"}`}>
    {/* <a href="https://www.freepnglogos.com/pics/netflix-logo-png" title="Image from freepnglogos.com"><img className="nav_logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" width="200" alt="netflix logo" /></a> */}
    <img className="nav_logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" width="150"  alt="nav"/>
    </div>
</>
    );
}


export default Nav ;