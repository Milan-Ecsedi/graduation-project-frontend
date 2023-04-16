import { Component } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Course } from "../Course";
import CourseCard from "../components/CourseCard";
import MiniCourseCard from "../components/MiniCourseCard";

interface State{
    username: string;
    profile_pic: string;
    email:string;
    editprofile: boolean;
    coursesByUser: CourseByUser[]
}

interface CourseByUser{

    id: number;
    apply_date: string;
    course: Course
}

export default class Profile extends Component<{}, State>{

    constructor(props:{}){
        super(props)

        this.state=({
            username: '',
            email:'',
            profile_pic: '',
            editprofile: false,
            coursesByUser: []
        })
       
    }
    
handleProfileLoad= ()=>{
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
            window.location.replace('/login')
        }
}

findCoursesByUser= async ()=>{

    let response= await fetch('http://localhost:3000/applied-user/findCourseByUser',{
        headers:{
            'Authorization':'Bearer '+ localStorage.getItem('token')
        }
    })

    const data= await response.json() as CourseByUser[]

    this.setState({
        coursesByUser: data
    })

    }


componentDidMount() {
    this.findCoursesByUser()
}

 
render(){


    return <div>
        
        <div style={{backgroundColor:'white', borderRadius:'10px', textAlign:'center', marginBottom:'5px'}}>
        <img src = {localStorage.getItem('user.profile_pic')!} 
        alt="Profil kép" 
        style={{height:'200px', width:'200px' ,borderRadius:'50%'}} />
        
        <h3>
            {localStorage.getItem('user.name')}
        </h3>
        
        <p>
            {localStorage.getItem('user.email')}
        </p>
        <button  
        className="btn btn-danger grow" 
        onClick={this.logout}>Kijelentkezés</button>
        <button  
        className="btn btn-warning grow" 
        onClick={this.logout}>Profilkép módosítása</button>
        
        </div>
        <center>
        <div style={{backgroundColor:'white', borderRadius:'10px', textAlign:'center', width:'1000px', marginBottom:'300px'}}>
        <h2>Kurzusaid:</h2>
         {this.state.coursesByUser.map(course => <MiniCourseCard course={course.course} apply_date={course.apply_date}></MiniCourseCard>
        )}
        </div>
        </center>
        <Footer/>    
    </div>
}
}
