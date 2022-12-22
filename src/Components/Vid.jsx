import React from 'react'
import dashvid from '../assets/dashvideo.mp4'

function Vid() {
  return (
    <div className='dashvideo'>
      <video className='viddash' src={dashvid} autoPlay muted loop/>
    </div>
  )
}

export default Vid