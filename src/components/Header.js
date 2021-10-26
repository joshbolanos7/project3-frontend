import { Link } from "react-router-dom";
import mercedes from "../public/images/mercedes-logo.png"
import redbull from "../public/images/redbull-logo.png"
import ferrari from "../public/images/ferrari-logo.png"
import McLaren from "../public/images/McLearen-logo.png"
import AlphaTauri from "../public/images/AlphaTauri-logo.png"
import Alpine from "../public/images/Alpine-logo.png"
import astonMartin from "../public/images/Aston-Martin-logo.png"
import AlfaRomeo from "../public/images/Alfa-Romeo-logo.png"
import williams from "../public/images/williams-logo.png"
import haas from "../public/images/Haas-Logo.png"

function Header(props){
    return ( 
        <nav className="nav">
            <Link to ="/">
                {/* <div>F1 Log App</div> */}
                <img src={mercedes} alt=""></img>
                <img src ={redbull} alt=""></img>
                <img src ={ferrari}alt=""></img>
                <img src ={McLaren} alt="" height="75px" width="150px"></img>
                <img src ={AlphaTauri} alt="" height="75px" width="150px"></img>
                <img src ={Alpine} alt="" height="75px" width="100px"></img>
                <img src ={astonMartin} alt="" height="100px" width="150px"></img>
                <img src ={AlfaRomeo} alt="" height="100px" width="150px"></img>
                <img src ={williams} alt="" height="75px" width="100px"></img>
                <img src ={haas} alt="" height="100px" width="150px"></img>

            </Link>
        </nav>
    )
}

export default Header;