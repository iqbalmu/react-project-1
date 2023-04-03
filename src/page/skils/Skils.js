import React from 'react'
import Title from '../../components/title/Title'
import SkillCard from '../../components/skillCard/SkillCard'
import { skils } from "../../data";
import './Skils.scss'

const Skils = () => {
  return (
    <div className='skils'>
      <div className='container'>
        <Title title={"Skils"} desc={"Beberapa kemampuan saya."} />
        <div className='wrapper'>
          {skils.map( skill => (
            <SkillCard key={skill.id} icon={skill.icon} title={skill.languange} level={skill.level}/>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Skils