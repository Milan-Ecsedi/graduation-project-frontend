import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Course } from "../Course";
import "bootstrap/dist/css/bootstrap.css";
import {useEffect, useState } from "react";

interface State{
    course:Course[]
}

export default function CoursePage() {
    const [ course, setCourse ] = useState(null as Course|null);
    const {courseId}=useParams();

    async function loadSelectedCourse(urlId: string){
        let response=await fetch('http://localhost:3000/course/search/'+urlId)
        let data=await response.json() as Course[]
        setCourse(data[0])
    }

    useEffect(() => {
        if (courseId) {
            loadSelectedCourse(courseId)
        }
        
    }, [courseId])

    return <div>
    <Header></Header>
    <center>
    <div className="card" style={{width: '800px', marginTop:'5px'}}>
        {course?.cover_photo===''?<p>Ehez a kurzushoz nincs boritó kép</p>:<img src={course?.cover_photo} alt="Kurzus kép" className="card-image-top"/>}
        <div className="card-body courseCard">
            <h4 className="card-title">
            {course?.course_name}
            </h4>
            <p className="card-text">
            {course?.details}
            </p>


           <a href={course?.file_url} className='btn btn-success grow'>Kurzus csomag</a>
           <p>A kurzus lejárati ideje: {course?.deadline}</p>
        </div>
    </div>
    </center>
    <Footer></Footer>
</div>
}


{/*export default  function electedCourse(){


const {courseId}=useParams();



 let response=await fetch('http://localhost:3000/course/search/'+{courseId})
 let data=await response.json() as Course






}*/}