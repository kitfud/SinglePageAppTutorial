import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
  return (
    <React.Fragment>
  <div class = "headerText">Kit's Art</div> 
      <nav class = "bar"> 
         <Link class = "button" to= '/home'>Home</Link>  
         <Link class="button" to = '/art'> Art</Link>   
      </nav> 
    </React.Fragment>
  )
}

export default Header;