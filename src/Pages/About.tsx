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
        <p>A kurzus weboldal egy olyan platform, amely lehetőséget kínál diákoknak, hogy jelentkezzenek különböző kurzusokra és továbbképzésekre online. Az oldal általában széles körű kurzuskínálattal rendelkezik,
        amelyek között megtalálhatók az alapvető tárgyak, mint az angol vagy a matek, valamint speciális kurzusok, például a programozás, a marketing vagy a design.
Az oldal általában egy egyszerű és könnyen használható felületen keresztül működik. A diákok először regisztrálnak egy fiókot, majd kiválasztják a kurzust, amelyre jelentkezni szeretnének.
Amikor a diák megtalálta a megfelelő kurzust, akkor jelentkezhet rá.</p>
        </div>
        </center>
        <Footer/>
    </div>
}
 

}