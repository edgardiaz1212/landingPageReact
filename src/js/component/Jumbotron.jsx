import React from "react";

const Jumbotron =()=>{
    return(
      <>
        <div className="container p-5 bg-light mt-3">
            <div class="jumbotron">
              <h1 className="display-4">A Warm Welcome!</h1>
              <hr className="my-4 invisible"/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga recusandae non cum praesentium reiciendis quas laboriosam sapiente quod possimus deleniti delectus voluptatum, temporibus beatae voluptates expedita nobis error sed obcaecati..</p>
              <p className="lead">
                  <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
              </p>
            </div>
        </div>

        
      </>
    )

}

export default Jumbotron