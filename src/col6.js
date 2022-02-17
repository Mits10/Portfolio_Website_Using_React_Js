import React, {useState} from "react";

const Halfcol =({children})=>{
return (
   <div className="col-md-6">
       <div  className= "row">
           <div className="col-md-6">
               {children}
           </div>
       </div>
   </div> 
);
};
export default Halfcol;