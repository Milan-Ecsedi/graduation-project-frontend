import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import Logo from '../images/gritos_logo.png';
import GuestPic from "../images/base_profile_icon.png"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { AccountCanvas } from "./AccountCanvas";

/**
 * 
 * Fejléc, bejelentkezett vagy a vendég változatot tölti be az alapján hogy a token üres-e
 * Itt használódik fel az AccountCanvas componens, ha a felhasználó be van jelentkezve
 */
export default class Header extends Component<{}>{



    render(): ReactNode {


        return  <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'rgb(27, 163, 210)', border: 'solid 3px rgb(27, 163, 242)'}}>
                <Link to='/' className="navbar-brand">
                    <img src={Logo} alt="" style={{ marginLeft: '25px' }} />
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
                        <li className="nav-item" style={{ marginLeft: '350px' }}>


                              {localStorage.getItem('token') !== '' || localStorage.getItem('token') === null? <div>
                            <div style={{ textAlign: 'center' }}>
                            {/* <Link to='/profile'><img src={localStorage.getItem('user.profile_pic')!} alt="" style={{ width: '60px', height: '60px', borderRadius: '50%' }} /></Link> */}
                            <AccountCanvas key={'end'} placement={'end'} name={'end'} />
                            <h4>{localStorage.getItem('user.name')}</h4>
                             </div>
                            </div> 
                            : 
                            <div>
                              <img src={GuestPic}alt="" style={{ width: '60px', height: '60px', marginLeft: '85px', borderRadius: '50%' }} />
                              <div style={{ textAlign: 'center' }}>
                                <h4>Vendég</h4>
                                </div>
                                <Link className='btn btn-success grow' style={{ marginRight: '7px' }} to='/login'>Bejelenkezés</Link> 
                                <Link className='btn btn-success grow' to='/register'>Regisztrálás</Link>
                                </div>
                            }
                        </li>
                    </ul>
                </div>

            </nav>
    }


}