import React from "react";
import Jumbotron from "./Jumbotron.jsx"
import CardsGroup from "./CardsGroup.jsx";


const Container =()=>{
    return(
        <>
        <div className="container">
            <Jumbotron/>
            <CardsGroup/>
        </div>
        
        </>
    )
}
export default Container