import { Component } from "react";
import Footer from "../components/Footer";

interface State{

}

export default class Profile extends Component<{}, State>{


render(){


    return <div>
        <div style={{backgroundColor:'white', borderRadius:'10px', textAlign:'center'}}>
        <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt="Profile kép" />
        <h3>Vendég</h3>
        <p>Email-cím: example@example.com</p>

        <button className="btn btn-warning grow">Adatok módosítása</button>
        <button className="btn btn-danger grow">Profil törlése</button>
        </div>
        <Footer></Footer>
    </div>
}

}