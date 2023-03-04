import { Component} from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../images/gritos_logo.png"

export default class LoginPage extends Component{



render() {
    
    

    return <div className="FormPage">
    <img src={Logo} alt="Gritos Logo" />
    <h2>Learn with us</h2>
    <p>Felhasználó név:</p>
    <input type="text"/>
    <p>Jelszó:</p>
    <input type="password" /> <br/>

    <button className='btn btn-success grow'>Bejelentkezés</button>
    <p>Nincs még Fiókod?<Link to='/register'>Itt</Link> elkészítheted</p>
    <Footer></Footer>
    </div>
}




}