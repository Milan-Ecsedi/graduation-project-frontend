import { Component } from "react";
import { Course } from "../Course";
import { Link } from "react-router-dom";

/**
 * Kivűlről kapott jelentkezési dátum és egy kurzus objektum
 */
interface Props{
apply_date: string
course: Course
}

/**
 * Profil oldalon jelenik meg, egy kissebb változata a CourseCard-nak
 * megjeleníti a kurzust tömörebb változatban és kírja a csatlakozási dátumot 
 */
export default class MiniCourseCard extends Component<Props>{

render(){

    return <div className="card" style={{textAlign:'center', margin:'2px'}}>
        <center>
            <h5 className="card-title">{this.props.course.name}</h5>
            <p className="card-text">{this.props.course.subject}</p>
            <Link to={'/course=id/'+this.props.course.id.toString()} className="btn btn-success grow">Megtekintés</Link>
            <p className="card-text">jelentkezett: {this.props.apply_date}</p>
            </center>
    </div>


}



}