import React from 'react'
import coverPhoto from "/images/coverphoto.jpg"
import myPhoto from "/images/Me.png"

const Me = () => {
  return (
    <div className='me'>
      <div>
        <img src={coverPhoto} width="100%" height="20%"/>
      </div>
      <div className="text-center">
        <img src={myPhoto} className="w-50 my-photo"/>
      </div>
    </div>
  )
}

export default Me;