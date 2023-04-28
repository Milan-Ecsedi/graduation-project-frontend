import { Component } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Course } from "../Course";
import CourseCard from "../components/CourseCard";
import MiniCourseCard from "../components/MiniCourseCard";
import userData from "./LoginPage";


/**
 * 
 */
interface State{
    username: string;
    profile_pic: string;
    email:string;
    editprofile: boolean;
    coursesByUser: CourseByUser[];
    pictureUrl: string;
}

/**
 * Interface a felhasználó kurzusaihoz
 */
interface CourseByUser{

    id: number;
    apply_date: string;
    course: Course
}

/**
 * Profil oldal , főképp localstorage-ból dolgozik.
 */
export default class Profile extends Component<{}, State>{

    constructor(props:{}){
        super(props)

        this.state=({
            username: '',
            email:'',
            profile_pic: '',
            editprofile: false,
            coursesByUser: [],
            pictureUrl: ''
        })
       
    }
    

    /**
     * 
     * A kép módosítása után frissíti a profil adatjait.
     * Egy string-et vár amit az input mezőből kap,
     * Egy alap validációt végrehajt ami ellenőrzi hogy a profil_pic változó üres-e.
     * Localstorage-ba eltárolja a profil kép url-ét,
     * a végrehajtása után üríti a profil_pic változót
     */
handleProfileUpdate= async ()=>{

    const data = {
        profile_pic: this.state.pictureUrl,
    }

    if(data.profile_pic===''){

        return;
    }

    let response= await fetch('http://localhost:3000/user/updateProfile', {
        method:'PATCH',
        headers:{
            'Authorization':'Bearer '+ localStorage.getItem('token'),
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
    })

    if(response.ok)
    {
        let response= await fetch('http://localhost:3000/user/profile',{
        headers: {'Authorization':'Bearer '+localStorage.getItem('token'),
        'content-type':'application/json'}
    })
    const responsedata = await response.json() as userData
    this.setState({
        pictureUrl: ''
    })

    localStorage.setItem('user.profile_pic', await responsedata.profile_pic)
    }

}

/**
 * Kijelentkezést hajt végre a függvény,
 * Ha sikeres akkor törli a localstorage tartalmát és betölti a főolalt
 */
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
            window.location.replace('/')
        }
}

/**
 * Lekéri a felhasznákó kurzusait,
 * a vissza kapott adatot eltárolja a coursesByUser tömbe
 */
findCoursesByUser= async ()=>{

    let response= await fetch('http://localhost:3000/applied-user',{
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
        style={{height:'200px', width:'200px' ,borderRadius:'50%'}} /> <br />
        
        <input type="text" className="profileInput" placeholder="Url, Pl: https://gritosprofile.jpg"
        value={this.state.pictureUrl} onChange={e=> this.setState({pictureUrl: e.currentTarget.value})}/>
        <br />
        <button  
        className="btn btn-warning grow" 
        onClick={this.handleProfileUpdate}>Profilkép módosítása</button> 
        
        <h3>
            {localStorage.getItem('user.name')}
        </h3>
        
        <p>
            {localStorage.getItem('user.email')}
        </p>
        <button  
        className="btn btn-danger grow" 
        onClick={this.logout}>Kijelentkezés</button>
        
        
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
