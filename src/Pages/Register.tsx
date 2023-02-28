import { Component } from "react";
import Logo from '../images/gritos_logo.png';
export default class Register extends Component{

    render(){


        
    return <div className="RegisterPage">

        <img src={Logo} alt="Gritos logo" />
        <h2>Learn with us</h2>
       <p>Felhasználó név:</p>  
        <input type='text' placeholder="pl.: Clever Human"/>
       <p>Email:</p> 
        <input type="text" placeholder="pl: cleverhuman@gmail.com"/>
       <p>Jelszó:</p> 
    
        <input type='password'/><br />
        
        <button className='btn btn-success grow'>Regisztrálás</button>


    </div>

    }

}