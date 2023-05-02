import React from "react";




const Card = (props) => {
  const cardStyle = {width:" 18rem "}
  return (
    <>    
        <div className="col-sm-3">
          <div className="card h-100" style={cardStyle} >
            <img src={props.imageURL} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">{props.cardTitle}</h5>
              <p className="card-text">{props.description}</p>
              
            </div>
            <div className="card-footer text-center p-3">
        <small className="text-body-secondary "> <a href={props.buttonURL} className="btn btn-primary ">Find out more!</a> </small>
      </div>
          </div>
        </div>
    </>
  );
};

export default Card;