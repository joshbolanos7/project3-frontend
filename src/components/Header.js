import { Link } from "react-router-dom";
import f1logo from "../public/images/formula-1-logo.png"

function Header(props){
    return ( 
        <nav className="nav">
            <Link to ="/">
                <div>F1 Log App</div>
                <img src= {f1logo} height="50px" width="150px"/>
            </Link>
        </nav>
    )
}

export default Header;