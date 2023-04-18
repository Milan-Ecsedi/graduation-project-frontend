import { Component, ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";
export default class About extends Component{


render(): ReactNode {
    
    return <div>
        <Header/>
        <center>
        <div className="card" style={{width: '800px', marginTop:'5px'}}>
            <h1 className="card-title">Rólunk</h1>
        <p className="card-text">Ez a project az MDM csapat álltal lett elkészítve.</p>

        <p>
            A Gritos applikáció egy könnyen kezelhető felületet kínál a kurzusok széles választékával, amelyekhez bármikor hozzáférhetnek a felhasználók.
        Hiszünk abban, hogy ügyfeleinknek kiváló élményt kell nyújtanunk, és folyamatosan törekszünk arra, hogy minden felhasználói élményt még jobbá tegyünk.
        Ezért folyamatosan figyelemmel kísérjük az ügyfelek visszajelzéseit és igényeit, és mindent megteszünk annak érdekében, hogy megfeleljünk ezeknek az elvárásoknak.
        </p> 
      <p> 
        <a href="#">
            gritos.course@gmail.com 
        </a> email címre várunk visszajelzést, komplikácíót és kérdéseket.
        </p>
        <p>
            Felhasználói adatokat bizalmasan megvédjük és nem használjuk fel saját célokra. 
            <br />
            Illetve nem adjuk ki az adatokat 3.-ik oldalnak
        </p>
        <p>
        Végezetül szeretném hangsúlyozni, hogy az applikációnk teljes mértékben testreszabható az Önök igényeire, ezért mindig újabb és újabb kurzusokkal bővítjük a kínálatunkat, 
        hogy mindenki számára a legmegfelelőbb oktatási anyagokat kínálhassuk.
        </p>
        <h6>DISCLAMER: Nem vállalunk felleősséget az ellopot fiókokért</h6>
        <h3>-Ecsedi Milán, Az MDM csapat Frontend fejlesztője</h3>
        
        </div>
        </center>
        <Footer/>
    </div>
}
 

}