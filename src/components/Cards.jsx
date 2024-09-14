
import Middle from "./Middle";

import { useEffect, useState } from "react";


function Cards (props,){

  


   
    return(
      
      <div className="w-[278px] shrink-0 grow  ">
      <div   className=" group rounded-[15px]   h-[182px] overflow-hidden  relative">
                              <img src={`/Middle_image/`+props.image}  className=" group-hover:scale-110 duration-200 object-cover w-full h-full "/>
                            <div className="image-overlay absolute top-0  w-full  h-full text-[25px] flex font-bold items-end text-white pl-2 tacking-titer ">
                                     {props.offer}
                            </div>
             </div>  
             <div className="mt-3 font-bold text-xl">
              {props.title}
              </div>     
              
              <div className="flex items-center text-blck font-bold ">
                    <span className="text-green-600 mr-1">★</span>
                    <span>{props.rating} {props.minTime}-{props.maxTime} mins</span>
                </div>

                <div>
                  {props.name}
                </div>
                <div>
                  {props.place}
                </div>

              


      
          
      </div>
      

       
        
    )
}
export default Cards;