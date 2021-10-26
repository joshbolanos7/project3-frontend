import f1logo from "../public/images/formula-1-logo.png"
import mercedesCar from "../public/images/mercedes-car.png"
import yellow from"../public/images/pirelli-yellow-tire.png"
import white from "../public/images/pirelli-white-tire.png"
import red from "../public/images/pirelli-red-tire.png"
function Footer(props) {
    return (
        <div className="footer-contain">
        <img src={white} alt="white pirelli tire" height="75px" width="75px"/>
        <img src={yellow} alt="yellow pirelli tire" height="75px" width="75px"/>
        <img src={red} alt="red pirelli tire" height="75px" width="75px"/>
        <img src={f1logo} alt="F1 Logo" height="50px" width="150px" />
        <img src={mercedesCar} height="60px" width="160px" />
        </div>
    )
}

export default Footer;