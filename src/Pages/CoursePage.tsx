import React, { Component } from 'react';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Course } from '../Course';


interface State{
    courses: Course[];
  }
  
  export default class CoursePage extends Component<{},State>{
  
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


    render(){

        return <div>
            <Header/>
        {this.state.courses.map(course => <CourseCard course={course}/>
        )}

        </div>

    }
}

