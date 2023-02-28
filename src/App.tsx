import React, { Component } from 'react';
import './App.css';
import {Course} from './Course';
import CourseCard from './components/CourseCard';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.css"
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import CoursePage from './Pages/CoursePage';

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
 
 return <div>
  <Routes>
    <Route path='/register' element={<Register></Register>}></Route>
<Route path='/' element={<CoursePage></CoursePage>}></Route>
  </Routes>
  <Footer/>
  </div>
}
}
