import React from 'react'
import {Link} from 'react-router-dom'

function Home(){
  return (
    <React.Fragment>
      <text className ="center">
      This is my website to showcase my wonderful art!
      </text><br/>

      <img alt="" className ="center" width="auto" height="auto" src= "/images/1.jpg"/><br/>
      
      <Link className="center" to='/art'><b style={size}>See The Collection</b></Link>
    </React.Fragment>
  )
}

const size = {
  fontSize:"30px"
}

export default Home