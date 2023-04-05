import React from 'react'
import './SkillCard.scss'

const SkillCard = ({icon, title, level}) => {
  return (
    <div className='skillCard'>
        <img src={icon} alt='icon-skill'/>
        <div>
            <h3>{title}</h3>
            <p>{level}</p>
        </div>
    </div>
  )
}

export default SkillCard