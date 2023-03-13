import React from 'react'
import coverPhoto from "/images/coverphoto.jpg"
import myPhoto from "/images/Me.png"

const Me = () => {
  return (
    <div className='me-section'>
      <div className='cover-photo'>
        Cover Photo
        {/* <img src={coverPhoto}/> */}
        <div className='my-photo'>
          {/* <img src={myPhoto}/> */}
          My Photo
        </div>
      </div>
    </div>
  )
}

export default Me