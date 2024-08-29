import * as React from "react";
import Part_One from "./Part_One";
import Part_Two from './Part_Two'
import  "./assets/NewComponent.css";
import Part_Three from './Part_Three'

function NewComponent() {
  return (
    <div>
     
      <div style={{width:'100%'}} className="main">
        <div style={{width:'60%'}}>
          <Part_One />
        </div>
        <div style={{width:'40%',display:'flex'}}>
          <div style={{width:'50%'}}>
            <Part_Two />
          </div>
          <div style={{width:'50%'}}>
            <Part_Three />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewComponent;
