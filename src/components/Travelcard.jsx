import React from 'react'
import locationicon from '../assets/Fill 220.png'

const Travelcard = (props) => {
  return (
    <div className='card-container'>
      <div className='card-contents'>
        <img src={props.img} alt="world icon" />
        <div className='card-details'>
          <div className='location'>
            <img src={locationicon} alt="location icon" />
            <p className='country'>{props.country}</p>
            <p className='link'>view on Google Maps</p>
          </div>
            <div className='card-texts'>
              <h2>{props.location}</h2>
              <p className='date'> {props.date} </p>
              <p> {props.desc} </p>
            </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Travelcard
