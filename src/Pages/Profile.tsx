import { Component } from "react";
import Footer from "../components/Footer";

interface State{
    username: string| null;
    profile_pic: string| null;
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

        if(localStorage.getItem('user.name')|| localStorage.getItem('user.profile_pic')!== null){
        
            this.setState({
            username:localStorage.getItem('user.name'),
            profile_pic:localStorage.getItem('user.profile_pic')
        })
        }
        else{
            
            this.setState({
                username:'guest',
                profile_pic:''
            })

        }
}

 
render(){


    return <div>
        <div style={{backgroundColor:'white', borderRadius:'10px', textAlign:'center'}}>
        <img src={localStorage.getItem('user.profile_pic')} alt="Profil kép" style={{height:'200px', width:'200px' ,borderRadius:'50%'}} />
        <h3>{localStorage.getItem('user.name')}</h3>
        <p>{this.state.email}</p>

        <button className="btn btn-warning grow">Adatok módosítása</button>
        <button className="btn btn-danger grow">Profil törlése</button>
        </div>
        <Footer></Footer>
    </div>
}

}