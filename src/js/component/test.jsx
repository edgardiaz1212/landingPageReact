import React from "react"
const cardStyle = { width: "18rem" }
const formulary = [
  {
    imageURL: "www",
    cardTitle: "prueba",
    description: "caracas",
    buttonURL: "sss"
  },
  {
    imageURL: "fresa",
    cardTitle: "prueba2",
    description: "lorena",
    buttonURL: "23ee"
  },
  {
    imageURL: "wwert",
    cardTitle: "prueba3",
    description: "dasassd",
    buttonURL: "dsasaa"
  },
  {
    imageURL: "w212",
    cardTitle: "prueba4",
    description: "dasassd",
    buttonURL: "dsasaa"
  }
];
// function CreateCardList(formulary) {
//   const cardStyle = { width: "18rem" };
//   return (
//     <div>
//       {formulary.map((item, index) => (
//         <div className="card" style={cardStyle} key={index}>
//           <img src={item.imageURL} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{item.cardTitle}</h5>
//             <p className="card-text">{item.description}</p>
//             <a href={item.buttonURL} className="btn btn-primary">
//               Go somewhere
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

function generateCards(formulary, cardStyle) {
  // Create an array to store the JSX elements for each card
  const cards = [];

  // Loop through the formulary and create a card for each object
  for (let i = 0; i < formulary.length; i++) {
    const { imageURL, cardTitle, description, buttonURL } = formulary[i];

    // Create the JSX element for the card
    const card = (
      <div class="card" style={cardStyle}>
        <img src={imageURL} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{cardTitle}</h5>
          <p class="card-text">{description}</p>
          <a href={buttonURL} class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );

    // Add the card to the array
    cards.push(card);
  }

  // Return the list of cards as a JSX element
  return cards
}

const Cards = generateCards(formulary, cardStyle)
// const Cards = CreateCardList(formulary1)

export default Cards
 