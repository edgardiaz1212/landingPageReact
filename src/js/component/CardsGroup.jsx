import React from "react";

import Card from "./Card.jsx";

const CardsGroup = () => {
  return (
    <>
      <div className="row m-auto">
        {
          <Card
            imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32IcSLSqACB1hU95VytlZyL8aQD5vo5OWjw&usqp=CAU"
            cardTitle="Card title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, repudiandae assumenda amet est maiores aperiam maxime vitae! Necessitatibus nihil doloribus aliquid inventore."
            buttonURL= "http://www.4geeks.com"
          />
        }
        {
          <Card
            imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32IcSLSqACB1hU95VytlZyL8aQD5vo5OWjw&usqp=CAU"
            cardTitle="Card title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti optio dolorum cum nemo delectus."
            buttonURL= "http://www.4geeks.com"
          />
        }
        {
          <Card
            imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32IcSLSqACB1hU95VytlZyL8aQD5vo5OWjw&usqp=CAU"
            cardTitle="Card title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, voluptas in! Ratione esse deserunt a veritatis aut sed!"
            buttonURL= "http://www.4geeks.com"
          />
        }
        {
          <Card
            imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32IcSLSqACB1hU95VytlZyL8aQD5vo5OWjw&usqp=CAU"
            cardTitle="Card title"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, delectus!"
            buttonURL= "http://www.4geeks.com"
          />
        }
      </div>
    </>
  );
};
export default CardsGroup;
