import React from 'react'
import { usedImgsForFYP } from '../data/YourImg'

const Gallary = () => {
  return (
  
    <div class="--gallary-container">

        <h1 class="--gallary-title">masonry image gallary</h1>
        <div class="--gallary-image-container">
            <img src={usedImgsForFYP[0].url} alt=""/>
            <img src={require("../imgs/gallary/2.jpeg")} alt=""/>
            <img src={require("../imgs/gallary/3.jpeg")} alt=""/>
            <img src={require("../imgs/gallary/4.jpeg")} alt=""/>
            <img src={require("../imgs/gallary/5.jpeg")} alt=""/>
            <img src={require("../imgs/gallary/6.jpeg")} alt=""/>
            <img src={require("../imgs/gallary/7.jpeg")} alt=""/>
            <img src={require("../imgs/gallary/8.jpeg")} alt=""/>

            {usedImgsForFYP.map((img)=>
              {
                return(
                  <img src={img.url} alt=""/>
                )
              }
            )}
            
            {/* {usedImgsForFYP.map((img)=>(
              <img key={img.id} src={require(img.url)} alt=''></img>
            ))} */}
           
        </div>


    </div>

  )
}

export default Gallary