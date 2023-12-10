import "./style.css";
import { Component } from "react";
class Enter extends Component {
 render() {
    return(
        <div className="div_5">  
         <h1>This is created using Class Component </h1>
         <p>This is done using External css</p>
         <p style={{color:"pink",fontSize:"20px"}}>
            This is done using inline css
        </p>
 


        </div>
    );
 }
}

export default Enter;