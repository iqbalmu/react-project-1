import React from 'react'
import Title from '../../components/title/Title'
import img from '../../asset/img/profile.png'
import './Profile.scss'

const Profile = () => {
  return (
    <div className='profile' id='profile'>
      <div className='container'>
        <Title
          title={"Profile"}
          desc={"Mengenal saya secara singkat"}
        />
        <div className='content'>
          <div className='profile-img'>
            <img src={img} alt='profile-img' />
          </div>
          <div className='profile-desc'>
            <p>
              Aliquam blandit leo lorem, nec vehicula mi accumsan posuere. Duis condimentum ornare ante a posuere. Aliquam sem magna, sodales quis congue vel, congue nec nisi. Aenean nec lorem et dolor aliquet ullamcorper eu at sapien. Sed pretium mauris dui. Phasellus mollis accumsan tempus. Proin laoreet hendrerit ligula, id lacinia eros. Aenean consequat, felis eu malesuada lobortis, augue nisl faucibus ligula, id viverra mi erat at nisl. 
            </p>
            <br />
            <p>
              Aliquam a fringilla metus. Fusce ut tortor ut sem sagittis convallis. Morbi et augue sed nisl fermentum dictum eget ut nisl. Mauris ut dolor posuere augue porta lobortis nec sed lacus. 

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile