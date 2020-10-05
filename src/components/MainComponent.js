import React from 'react'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Art from './ArtComponent'

import {Switch,Route,Redirect}from 'react-router-dom'

function Main (){
  return(
  <React.Fragment>
  <Header/>
    <Switch>
    <Route path='/home' component ={Home}/>
    <Route path = '/art' component = {Art}/>
    <Redirect to='/home'/>
    </Switch>
  <Footer/>
  </React.Fragment>
  )
}

export default Main;