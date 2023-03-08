import { Component, ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.css"
import { Course } from "../Course";
import { Link } from "react-router-dom";



interface Props{
    course: Course;
}




export default class CourseCard extends Component<Props>{



 
render(): ReactNode {
    

return  <div style={{textAlign:'center'}}>
<center>
<div className="card" style={{width: '800px', marginTop:'5px'}}>
        
{this.props.course.cover_photo === '' ? <p>Borítókép ehez a kurzushoz nem lett feltöltve</p> : <img className="card-image-top" src={this.props.course.cover_photo} alt="Borítókép ehez a kurzushoz nem lett feltöltve"/>}
<div className="card-body courseCard">
<h4 className="card-title">{this.props.course.course_name}</h4>
<p className="card-text">{this.props.course.course_description}</p>
<p className="card-text">{this.props.course.subject}</p>
<p className="card-text">Témakör:{this.props.course.topic}</p>
<p className="card-text">Kurzus lejárati ideje: {this.props.course.deadline}</p>
<Link to={'/course/'+this.props.course.id.toString()} className="btn btn-success grow">Jelentkezz!</Link>
</div>


</div>
</center>
</div>
}
}
