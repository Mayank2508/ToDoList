import React from "react";
import  ReactDOM  from "react-dom";
import './index.css'

import App from './App'
/*function ncard(val){
  return(
    <Cards 
    imgsrc={val.imgsrc}
    title={val.title}
    
    
    />
  );
}*/


ReactDOM.render(
    <>
   
   <App/>

    </>
   ,
    document.getElementById('root')
)

const fullname={fname:'mayank',lname:'awasthi'}
const biodata={id:1,...fullname,age:26,gender:'male'};

console.log(biodata);
