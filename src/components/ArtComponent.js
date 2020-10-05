import React from 'react'
import {Link} from 'react-router-dom'
import {ART} from './shared/art'

function RenderPaintings(){
  const mypaintings = ART.map((info)=>
    <tr>
      <td>{info.name}</td>
      <td><img alt="" width= "200px" heigh="200px"src={info.image}></img></td>
    </tr>
  )

  return <React.Fragment> 
    <table>
    <tr>
      <th>Title</th>
      <th>Painting</th>
    </tr>
    {mypaintings}
    </table> 
  </React.Fragment>
}

function Art(){

  return (
    <React.Fragment>
    <br/>
    <RenderPaintings/>
    <br/>
    <Link style= {margin} to='/home'> <em>Click for Home</em> </Link>
    </React.Fragment>
  )
}

const margin = {
  marginLeft:"200px"
}

export default Art  