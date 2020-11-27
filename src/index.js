import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import data from './Alldata';
 ReactDOM.render(
   <>
   <h1 className="ml2">My Favoraite Netflix Series And Movies there are more lot...</h1>
   <div className="flexbox">
      <App 
        imgsrc = {data[0].imgsrc}
        title = {data[0].title}
        sname = {data[0].sname}
        link = {data[0].link}
      />  
      <App 
         imgsrc = {data[1].imgsrc}
        title = {data[1].title}
        sname = {data[1].sname}
        link = {data[1].link}
      />
      <App 
         imgsrc = {data[2].imgsrc}
        title = {data[2].title}
        sname = {data[2].sname}
        link = {data[2].link}
      />
      <App 
         imgsrc = {data[3].imgsrc}
        title = {data[3].title}
        sname = {data[3].sname}
        link = {data[3].link}
      />
      </div>
      </>,
   document.getElementById("root")
 );