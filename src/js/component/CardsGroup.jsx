import React from "react";

import Card from "./Card.jsx";


const CardsGroup = () => {
    return (
    <> 
        <div className="row mb-3">
            
            {<Card imageURL= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32IcSLSqACB1hU95VytlZyL8aQD5vo5OWjw&usqp=CAU"
            cardTitle= "Card title" description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, repudiandae assumenda amet est maiores aperiam maxime vitae! Necessitatibus nihil doloribus aliquid inventore."/>}
            {<Card imageURL= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32IcSLSqACB1hU95VytlZyL8aQD5vo5OWjw&usqp=CAU" 
            cardTitle= "Card title" description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti optio dolorum cum nemo delectus."/>}
            {<Card imageURL= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32IcSLSqACB1hU95VytlZyL8aQD5vo5OWjw&usqp=CAU" 
            cardTitle= "Card title" description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, voluptas in! Ratione esse deserunt a veritatis aut sed!"/>}
            {<Card imageURL= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32IcSLSqACB1hU95VytlZyL8aQD5vo5OWjw&usqp=CAU" 
            cardTitle= "Card title" description= "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, delectus!"/>}
        </div>
        </>
        
        )};
export default CardsGroup;

