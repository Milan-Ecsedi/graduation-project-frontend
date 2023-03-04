import React, { Component } from 'react';
import './App.css';
import {Course} from './Course';
import "bootstrap/dist/css/bootstrap.css"
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './Pages/RegisterPage';
import CoursePage from './Pages/CoursePage';
import LoginPage from './Pages/LoginPage';
import About from './Pages/About';


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
    let response=await fetch('http://localhost:3000/course/list')
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
    <Route path='/' element={<CoursePage></CoursePage>}></Route>
    <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
    <Route path='/login' element={<LoginPage></LoginPage>}></Route>
    <Route path='/*' element={<p style={{fontSize:'50px'}}>Ez az oldal nem létezik, biztos hogy jól írtad be az url-t? :P</p>}></Route>
    <Route path='/about' element={<About></About>}></Route>
  </Routes>
  </div>
}
}
