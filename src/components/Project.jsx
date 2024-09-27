import React from 'react'

export default function Project({project}) {
  return (
    <div className="w3-third">
                        <a className="font-size" href={project.link} target="_blank">
                        <div className="w3-card">
                            <img className= "hover" src={project.image} alt="blog"/>
                            <div className="w3-container">
                                 <p>{project.title}</p> 
                            </div>
                            </div>
                        </a>
                        </div>
  )
}
