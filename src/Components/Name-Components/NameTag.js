import React, {useEffect} from "react";
import "./NameTag-comp.css";
 function NameTag(props) {
   useEffect(()=>{
    console.log("child")
   },[]); 
    if(props.firstName === "Shobhit"){
        return <h1 className="vip">Hello Shobhit</h1>
    }
  return (
    <div>
      <h1 className="people" >{props.firstName} {props.lastName} <sub className="tag" >Friend {props.slaveNo +1}</sub></h1>
    </div>
  );
}
//style={{color:props.firstName==='Sahil'&&props.age>=26&&"red"}}

export default NameTag;