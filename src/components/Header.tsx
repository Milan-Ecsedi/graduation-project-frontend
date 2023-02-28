import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import Logo from '../images/gritos_logo.png';


    
export default class Header extends Component<{}>{


render(): ReactNode {
    

    return  <header style={{backgroundColor:'rgb(16, 212, 158)',borderRadius:'7px'}}>

    
    
            <img src={Logo} alt="" style={{marginLeft:'25px', marginTop:'10px'}} />
         
           <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt="" style={{width:'100px',height:'100px', marginLeft:'1000px'}} />
          <div style={{marginLeft:'1240px', textAlign: 'center'}}>
          <h3>Vendég</h3>
          <Link className='btn btn-success grow' style={{marginRight:'7px'}} to='/login'>Bejelenkezés</Link>
          <Link className='btn btn-success grow' to='/register'>Regisztrálás</Link>
          </div>
          
    
      </header>

}


}