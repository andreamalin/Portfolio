import React from 'react'
import './Hobbies.scss'

import name from '../../images/dogs_title.png'

import dog1 from '../../images/dogs/dog (1).jpg'
import dog2 from '../../images/dogs/dog (2).jpg'
import dog3 from '../../images/dogs/dog (3).jpg'
import dog4 from '../../images/dogs/dog (4).jpg'
import dog5 from '../../images/dogs/dog (5).jpg'
import dog6 from '../../images/dogs/dog (6).jpg'
import dog7 from '../../images/dogs/dog (7).jpg'
import dog8 from '../../images/dogs/dog (8).jpg'
import dog9 from '../../images/dogs/dog (9).jpg'
import dog10 from '../../images/dogs/dog (10).jpg'
import dog11 from '../../images/dogs/dog (11).jpg'
import dog12 from '../../images/dogs/dog (12).jpg'
import dog13 from '../../images/dogs/dog (13).jpg'
import dog14 from '../../images/dogs/dog (14).jpg'
import dog15 from '../../images/dogs/dog (15).jpg'
import dog16 from '../../images/dogs/dog (16).jpg'
import dog17 from '../../images/dogs/dog (17).jpg'
import dog18 from '../../images/dogs/dog (18).jpg'
import dog19 from '../../images/dogs/dog (19).jpg'

const dogImages = [
  dog1, dog2, dog3, dog4, dog5, dog6, dog7,
  dog8, dog9, dog10, dog11, dog12, dog13,
  dog14, dog15, dog16, dog17, dog18, dog19,
]

const Hobbies = () => (
  <div id="hobbies">
    <img className="name-container" alt="Feeding dogs" src={name} />
    <h3>
      I am a dog lover who feeds my community stray dogs💖
    </h3>
    <div className="photo-container">
      <div className="dogs">
        {
          dogImages.map((item) => (
            <img src={item} alt="dog" />
          ))
        }
      </div>
    </div>
  </div>
)

export default Hobbies
