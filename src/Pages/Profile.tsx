import { Component } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

interface State{
    username: string;
    profile_pic: string;
    email:string;
}

export default class Profile extends Component<{}, State>{

    constructor(props:{}){
        super(props)

        this.state=({
            username: '',
            email:'',
            profile_pic: ''
        })
       
    }
    
handleProfileLoad= ()=>{

            this.setState({
            username:localStorage.getItem('user.name')!,
            profile_pic:localStorage.getItem('user.profile_pic')!
        })
}

logout = async ()=>{

    let response= await fetch('http://localhost:3000/auth/logout',{
        method: 'DELETE',
        headers:{
            'Authorization':'Bearer '+ localStorage.getItem('token')
        }
    });
        if(response.ok){
            localStorage.setItem('user.id', '')
            localStorage.setItem('token','')
            localStorage.setItem('user.name', '')
            localStorage.setItem('user.profile_pic','')
        }
}

componentDidMount() {
    
}

 
render(){


    return <div>
        <div style={{backgroundColor:'white', borderRadius:'10px', textAlign:'center'}}>
        <img src= {localStorage.getItem('user.profile_pic')} alt="Profil kép" style={{height:'200px', width:'200px' ,borderRadius:'50%'}} />
        <h3>{localStorage.getItem('user.name')}</h3>
        <p>{this.state.email}</p>

        {/* <button className="btn btn-warning grow">Adatok módosítása</button> */}
        <Link to='/Login' className="btn btn-danger grow" onClick={this.logout}>Kijelentkezés</Link>
        </div>
        <Footer></Footer>
    </div>
}

}