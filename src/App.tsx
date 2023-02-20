import React, { Component } from 'react';
import './App.css';
import {Course} from './Course';
import CourseCard from './components/CourseCard';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.css"
import Header from './components/Header';

interface State{
  courses: Course[];
}

export default class App extends Component<{},State>{

  constructor(props:{}){
    super(props);

    this.state={
        courses:[]
    }

    }


async loadCourses(){
    let response=await fetch('http://localhost:3000/courses')
    let data=await response.json() as Course[]
    this.setState({
       courses: data,
    })
    
}

componentDidMount() {
  
  this.loadCourses()
  
  
}
render(): React.ReactNode{
  
  //rgb(164, 253, 204)
  //rgb(113, 173, 254) 
console.log(this.state.courses);
  return <div>
    <Header/>
  

{this.state.courses.map(course => <CourseCard course={course}/>
  )}
 
  <Footer/>
  </div>
}
}
