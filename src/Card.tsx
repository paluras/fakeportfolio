import React from "react";
import project from  '/thumbnail-project-1-small.webp'

function Card(){
    return(
        <div className='projects'>
              <img src={project}></img>
              <h3>Design Portfolio</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <div className='links'>
                <text>View Project</text>
                <text>View Code</text>
              </div>
            </div>
    )
}


export default Card