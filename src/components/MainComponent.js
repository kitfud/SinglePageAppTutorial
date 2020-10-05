import React from 'react'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'

function Main (){
  return(
  <React.Fragment>
  <Header/>
  <Home/>
  <Footer/>
  </React.Fragment>
  )
}

export default (Main);