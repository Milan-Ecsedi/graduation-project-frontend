import { Component } from "react";
import Footer from "../components/Footer";

interface State{
    id: number;
    username: string;
    password:string;
    email: string;
    profile_pic: string;
}

export default class Profile extends Component<{}, State>{

    constructor(props:{}){
        super(props)

        this.state=({
            id: 0,
            username:'',
            email:'',
            password:'',
            profile_pic:''
        })
    }



handleProfileLoad = async ()=>{


 if(localStorage.getItem('token')===null){
    this.setState({
        username: 'Vendég',
        email:'',
        profile_pic: "../images/base_profile_icon.png"
    })
 } else{

    let response= await fetch('http://localhost:3000/user/profile',{
        headers: {'Authorization':'Bearer '+localStorage.getItem('token'),
        'content-type':'application/json'}
    })

    const data = await response.json() as State

    this.setState({
        id: data.id,
        username: data.username,
        email: data.email,
        password: data.password,
        profile_pic:data.profile_pic
    })

 }


}

componentDidMount(){
    this.handleProfileLoad()

}



render(){


    return <div>
        <div style={{backgroundColor:'white', borderRadius:'10px', textAlign:'center'}}>
        <img src={this.state.profile_pic} alt="Profil kép" style={{height:'200px', width:'200px' ,borderRadius:'50%'}} />
        <h3>{this.state.username}</h3>
        <p>{this.state.email}</p>

        <button className="btn btn-warning grow">Adatok módosítása</button>
        <button className="btn btn-danger grow">Profil törlése</button>
        </div>
        <Footer></Footer>
    </div>
}

}