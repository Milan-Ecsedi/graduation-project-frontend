import { Component } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import Footer from "../components/Footer";
import Logo from '../images/gritos_logo.png';

interface State{
    errormess:string;
    regUser:string;
    regEmail: string;
    regPass:string;
}

export default class RegisterPage extends Component<{},State>{

constructor(props:{}){
    super(props);

    this.state={
        errormess:'',
        regUser:'',
        regEmail:'',
        regPass:''
    }
}

handleRegister=async()=>{

    if(this.state.regUser.trim()===''){
        this.setState({errormess:'Felhasználó nevet kitölteni kötelező'})
        return;
    }
    else{
    const data={
        username:this.state.regUser,
        email: this.state.regEmail,
        password: this.state.regPass, 
    };
    
    let response= await fetch('http://localhost:3000/courses/users/register',{
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify(data),
    });
    
    this.setState({
        regUser:'',
        regEmail:'',
        regPass:''
    })
    this.setState({errormess:'Sikeres regisztráció'})
    
}

}

    render(){


        
    return <div className="FormPage">

        <img src={Logo} alt="Gritos logo" />
        <h2>Learn with us</h2>
       <p>Felhasználó név:</p>  
        <input type='text' value={this.state.regUser} onChange={e=>this.setState({regUser: e.currentTarget.value})}/>
       <p>Email:</p> 
        <input type="text" value={this.state.regEmail} onChange={e=>this.setState({regEmail: e.currentTarget.value})}/>
       <p>Jelszó:</p> 
        <input type='password' value={this.state.regPass} onChange={e=>this.setState({regPass: e.currentTarget.value})}/><br/>
        
        <button className='btn btn-success grow' onClick={this.handleRegister}>Regisztrálás</button>
        <ErrorMessage Message={this.state.errormess}></ErrorMessage>
        <p>Van már Fiókod?<Link to='/login'>Itt</Link> bejelentkezhetsz</p>
        <Footer/>
    </div>

    }

}