import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Course } from "../Course";
import "bootstrap/dist/css/bootstrap.css";
import {useEffect, useState } from "react";


interface CheckJoined{
    joined:boolean
}

export default function CoursePage() {

    /**
     * course objektum-ba tárolódik a kiválasztott kurzus
     * courseId-ba kerül az url-ből kiszedett kurzus azonosítója
     * joined boolean tipusú változó felel a felhasználó jelentkezett-e a kurzusra
     */
    const [ course, setCourse ] = useState(null as Course|null);
    const {courseId}=useParams();
    const [isjoined, setIsJoined] = useState(false);


    /**
     * Lekérí backend-ről @UrlId alapján a megfelelő kurzust
     * 
     * @param urlId a url-ből kiszedett azonosító string-ként
     */
    async function loadSelectedCourse(urlId: string){
        let response=await fetch('http://localhost:3000/course/search/'+urlId)
        let data=await response.json() as Course[]
        setCourse(data[0])
    }

    useEffect(() => {
        if (courseId) {
            loadSelectedCourse(courseId)
            isJoined(courseId)
        }
        
    }, [courseId])


    /**
     * A felhasználó jelentkezés elküldéséért felel
     * Ha a response status 201, meghívja az isJoined function-t
     */
    async function sendApplicationRequest() {
    const data={
        id: courseId
    }

    let response= await fetch('http://localhost:3000/applied-user/join',{
        method:'POST',
        headers:{
            'Authorization':'Bearer '+ localStorage.getItem('token'),
            'Content-type':'application/json'
        },
        body: JSON.stringify(data),        
    });

    if(response.status == 201){
        await isJoined(courseId!)
    }
   }


   /**
    * A backend-től vissza kapott válasz alapján eldönti hogy a felhasználó jelentkezett-e 
    * @param urlId a url-ből kiszedett azonosító string-ként
    */
   async function isJoined(urlId: string){
    let response= await fetch('http://localhost:3000/applied-user/isJoined/'+urlId, {
    headers:{
        'Authorization':'Bearer '+ localStorage.getItem('token')
    }
    });

    let data= await response.json() as CheckJoined
    setIsJoined(data.joined)
   }


   /**
    * Vissza küldi a kiválasztott kurzust és oldalt
    * isJoined boolean itt kerül eldöntésre és a megfelelő gombot adja vissza
    */
    return <div>
    <Header/>
    <center>
    <div className="card" style={{width: '800px', marginTop:'5px'}}>
        {course?.cphoto===''? <img src="https://attachment.eab.com/wp-content/uploads/2021/08/Illustration-dei-light-background.png" alt=""/>:<img src={course?.cphoto} alt="Kurzus kép" className="card-image-top"/>}
        <div className="card-body courseCard">
            <h4 className="card-title">
            {course?.name}
            </h4>
            <p className="card-text">
            {course?.details}
            </p>

           { isjoined === true ? <a href={course?.file_url} className='btn btn-success grow'>Kurzus csomag</a>:<button className='btn btn-success grow' onClick={sendApplicationRequest}>Csatlakozás</button>}
           <p>A kurzus lejárati ideje: {course?.deadline}</p>  
        </div>
    </div>
    </center>
    <Footer/>
</div>
}


