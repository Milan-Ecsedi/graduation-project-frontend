import { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from '../images/gritos_logo.png';

interface State{
    errormess:string;
    regUser:string;
    regEmail: string;
    regPass:string;
    regPass2:string;
    showpw:string;
}

export default class RegisterPage extends Component<{},State>{

constructor(props:{}){
    super(props);

    this.state={
        errormess:'',
        regUser:'',
        regEmail:'',
        regPass:'',
        regPass2:'',
        showpw:'password'
    }
}

handleRegister=async()=>{

    if(this.state.regUser.trim()==='' ){
        this.setState({errormess:'Felhasználó nevet kitölteni kötelező'})
        return;
    }else if(this.state.regPass===''){
        this.setState({errormess:'A jelszó nem lehet üres'})
        return;
    }
    else if(this.state.regPass !== this.state.regPass2){
        this.setState({errormess:'Az ismétlő jelszó nem egyezik a jelszóval'})
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
    if(response.ok){
    this.setState({
        regUser:'',
        regEmail:'',
        regPass:''
    })
    this.setState({errormess:'Sikeres regisztráció'})
}
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
        <input type={this.state.showpw} value={this.state.regPass} onChange={e=>this.setState({regPass: e.currentTarget.value})}/>
        <p>Jelszó mégegyszer:</p> 
        <input type={this.state.showpw} value={this.state.regPass2} onChange={e=>this.setState({regPass2: e.currentTarget.value})}/><br/>
        <button className='btn btn-success grow' onClick={this.handleRegister}>Regisztrálás</button>
        <p style={this.state.errormess==='Sikeres regisztráció'? {color:'green'}: {color:'red'}}>{this.state.errormess}</p>
        <p>Van már Fiókod?<Link to='/login'>Itt</Link> bejelentkezhetsz</p>
        <Footer/>
    </div>

    }

}