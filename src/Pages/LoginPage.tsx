import { Component} from "react";
import { Link} from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../images/gritos_logo.png"
import "bootstrap/dist/css/bootstrap.css"
import { ResponseMess } from "../response";
import MessageBox from "../components/MessageBox";
import { TokenObj } from "../token";


interface State{
    message: string[];
    logEmail: string;
    logPassword:string;
}

interface userData{
    id:number;
    username: string;
    email: string;
    password: string;
    profile_pic: string;
}

export default class LoginPage extends Component<{}, State>{

    constructor(props:{}){
        super(props);
        this.state={
            logEmail:'',
            logPassword:'',
            message:[],
        }
    }

 handleLogin = async ()=> {
    

    if(this.state.logEmail.trim() && this.state.logPassword === '' ){
        this.setState({message:['A bejelentkezési adatokat kötelező kitölteni']})
    } else{
        const data={
            email: this.state.logEmail,
            password:this.state.logPassword,
        }
        let response = await fetch('http://localhost:3000/auth/login',{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        console.log(response)
        if(!response.ok){
             const res= await response.json() as ResponseMess
            this.setState({message: res.message})
        }else{
           
            
            const res= await response.json() as TokenObj
            localStorage.setItem('token', res.token)
            this.handleUserDataStorageLoad()   
            this.setState({
                message:['Sikeresen bejelentkezett']
            })
            window.location.replace('/')
            
            
        }

       
            
        
    }

}

handleUserDataStorageLoad =  async ()=>{

    let response= await fetch('http://localhost:3000/user/profile',{
        headers: {'Authorization':'Bearer '+localStorage.getItem('token'),
        'content-type':'application/json'}
    })

    const data = await response.json() as userData
    localStorage.setItem('user.id', data.id.toString())
    localStorage.setItem('user.name', data.username)
    localStorage.setItem('user.profile_pic', data.profile_pic)
   
 }



render() {
    
    

    return <div className="FormPage">
    <img src={Logo} alt="Gritos Logo" />
    <h2>Learn with us</h2>
    <center>
    <div className="card" style={{width: '400px', marginTop:'5px'}}>
    <p>E-mail cím:</p>
    <input type="text" value={this.state.logEmail} onChange={e => this.setState({logEmail: e.currentTarget.value})}/>
    <p>Jelszó:</p>
    <input type="password" value={this.state.logPassword} onChange={e => this.setState({logPassword: e.currentTarget.value})}/> <br/>

    <button  className='btn btn-success grow' onClick={this.handleLogin}>Bejelentkezés</button>
    <MessageBox message={this.state.message}></MessageBox>
    <p>Nincs még Fiókod?<Link to='/register'>Itt</Link> elkészítheted</p>
    </div>
    </center>
    <Footer></Footer>
    </div>
}
}




