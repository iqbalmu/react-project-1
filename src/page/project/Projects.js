import React from 'react'
import Title from '../../components/title/Title'
import ProjThumb from '../../components/projThumb/ProjThumb'
import { projects } from '../../data'
import './Projects.scss'

const Projects = () => {
  return (
    <div className='projects'>
      <div className='container'>
        <Title title={"Projects"} desc={"Beberapa proyek bikinan saya"} />
        <div className='project-list'>
          {
            projects.map( project => (
              <ProjThumb key={project.id} image={project.image} title={project.title} text={project.text}/>  
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects