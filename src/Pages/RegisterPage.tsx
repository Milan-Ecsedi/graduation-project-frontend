import { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from '../images/gritos_logo.png';
import { ResponseMess } from "../response";
import "bootstrap/dist/css/bootstrap.css"

/**
 * message-be tárolódik el a backendtől vissza kapott response üzenet
 * regUser , regEmail , regPass , regPass2 a regisztrációs adatok eltárolásáért felel
 * regerror boolean a hibás regisztrációs alert megjelenítésért felel
 * regsuccesful boolean a sikeres regisztrációs alert megjelenítésértfele
 */
interface State {
    message: string[];
    regUser: string;
    regEmail: string;
    regPass: string;
    regPass2: string;
    showpw: string;
    regerror: boolean;
    regsuccesful: boolean;
}

export default class RegisterPage extends Component<{}, State>{

   
    constructor(props: {}) {
        super(props);

        this.state = {
            message: [],
            regUser: '',
            regEmail: '',
            regPass: '',
            regPass2: '',
            showpw: 'password',
            regerror: false,
            regsuccesful: false
        }
    }

    /**
     * 
     * Validációt végez frontend-en és backend-en egyaránt
     * Ha átment minden adat a validáción létrehoz egy felhasználót a megadott adatok alapján
     * Regisztráció után átdob a login oldalra 
     */
    handleRegister = async () => {

        if (this.state.regUser.trim() === '') {
            this.setState({ 
                message: ['Felhasználó nevet kitölteni kötelező'],
                regerror: true
         })
            return;
        } else if (this.state.regPass === '') {
            this.setState({ 
                message: ['A jelszó nem lehet üres' ],
                regerror: true
        })
            return;
        }
        else if (this.state.regPass !== this.state.regPass2) {
            this.setState({
                message: ['Az ismétlő jelszó nem egyezik a jelszóval'],
                regerror: true
            })
            return;
        }
        else {
            const data = {
                username: this.state.regUser,
                email: this.state.regEmail,
                password: this.state.regPass,
            };

            let response = await fetch('http://localhost:3000/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });
           
            if(response.ok){
                this.setState({
                    regUser: '',
                    regEmail: '',
                    regPass: '',
                    regPass2: ''
                })
                this.setState({
                    regerror: false,
                    regsuccesful: true
                })
                window.location.replace('/login')
            }
            else{
                const res= await response.json() as ResponseMess
                this.setState({
                    message: res.message,
                    regerror:true
                })
            }
        }

    }

    render() {



        return <div className="FormPage">

            <img src={Logo} alt="Gritos logo" />
            <h2>Learn with us</h2>
            <center>
            <div className="card" style={{width: '400px', marginTop:'5px', marginBottom:'200px'}}>
            <p>Felhasználó név:</p>
            <input type='text' value={this.state.regUser} onChange={e => this.setState({ regUser: e.currentTarget.value })} />
            <p>Email:</p>
            <input type="text" value={this.state.regEmail} onChange={e => this.setState({ regEmail: e.currentTarget.value })} />
            <p>Jelszó:</p>
            <input type={this.state.showpw} value={this.state.regPass} onChange={e => this.setState({ regPass: e.currentTarget.value })}/>
            <p>Jelszó mégegyszer:</p>
            <input type={this.state.showpw} value={this.state.regPass2} onChange={e => this.setState({ regPass2: e.currentTarget.value })} /><br />
            <button className='btn btn-success grow' onClick={this.handleRegister}>Regisztrálás</button>
            {this.state.regerror===true ? <div className="alert alert-danger" role="alert">{this.state.message}</div> : null}
            {this.state.regsuccesful=== true ? <div className="alert alert-success" role="alert">Sikeres Regisztráció</div>: null}
            <p>Van már Fiókod?<Link to='/login'>Itt</Link> bejelentkezhetsz</p>
            </div>
            </center>
            <Footer />
        </div>

    }

}