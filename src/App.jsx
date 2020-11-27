import React from "react";
import "./index.css"

function App(props){
    return (
    <div className="container">
      <div className= "poster">
        <img src={props.imgsrc} alt="pic1" className="card_img" />
          <div className="image_title">
            <span className="poster_category">{props.title}</span>
            <h3 className="poster_tit">{props.sname}</h3>
            <a href={props.link} target="_blank">
              <button className="btn">Watch Now</button>
            </a>
          </div>
      </div>
    </div>
    )
}
export default App;