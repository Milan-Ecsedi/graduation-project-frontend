import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import Logo from '../images/gritos_logo.png';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"




export default class Header extends Component<{}>{


    render(): ReactNode {


        return <header style={{borderRadius: '7px', border:'solid 3px rgb(27, 163, 242)', backgroundColor:'rgb(27, 163, 210)'}}>

            {/* rgb(16, 212, 158) */}
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to='' className="navbar-brand">
                    <img src={Logo} alt="" style={{ marginLeft: '25px'}} />
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Főoldal<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>Rólunk</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to=''>Diákoknak</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to=''>Oktatóknak</Link>
                        </li>
                        <li className="nav-item">
                        <a href="https://www.patreon.com/Gritos235" className="btn btn-warning">Vegyél nekünk egy kávét ☕</a>
                        
                        </li>
                        <li className="nav-item" style={{marginLeft:'350px'}}>
                        <Link to='/profile'>
                        <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt="" style={{width:'60px',height:'60px', marginLeft:'85px'}} />
                        </Link> 
         <div style={{textAlign: 'center'}}> 
         <h4>Vendég</h4>
         <Link className='btn btn-success grow' style={{marginRight:'7px'}} to='/login'>Bejelenkezés</Link>
         <Link className='btn btn-success grow' to='/register'>Regisztrálás</Link>
         </div>
                        </li>
                    </ul>
                </div>

            </nav>




            {/* <Link to='' className="btn btn-info grow" style={{ marginLeft: '1%' }}>Rólunk</Link> */}
            {/* <Link to='' className="btn btn-info grow" style={{ marginLeft: '1%' }}>Felhasználói feltételek</Link> */}
            {/* <Link to='' className="btn btn-warning grow" style={{ marginLeft: '1%', marginBottom:'1%' }}>Vegyél nekünk egy kávét ☕</Link> */}


            {/*   <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt="" style={{width:'100px',height:'100px', marginLeft:'1000px'}} />
          
           <div style={{marginLeft:'1240px', textAlign: 'center'}}> 
          <h3>Vendég</h3>
          <Link className='btn btn-success grow' style={{marginRight:'7px'}} to='/login'>Bejelenkezés</Link>
          <Link className='btn btn-success grow' to='/register'>Regisztrálás</Link>
          </div>*/}


        </header>

    }


}