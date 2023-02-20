import { Component, ReactNode } from "react";
import Logo from '../images/gritos_logo.png';


    
export default class Header extends Component<{}>{


render(): ReactNode {
    

    return  <header style={{backgroundColor:'rgb(16, 212, 158)',borderRadius:'5px'}}>

    <nav style={{border:'solid black 3px'}}>
    
            <img src={Logo} alt="" style={{marginLeft:'25px', marginTop:'10px'}} />
         
           <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt="" style={{width:'100px',height:'100px', marginLeft:'1000px'}} />
          <div style={{marginLeft:'1240px', textAlign: 'center'}}>
          <h3>Vendég</h3>
          <a href="" className='btn btn-success grow' style={{marginRight:'7px'}}>Bejelenkezés</a>
          <a href="" className='btn btn-success grow'>Regisztrálás</a>
          </div>
          
    </nav>
      </header>

}


}