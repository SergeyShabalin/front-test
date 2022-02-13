import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {TelephoneNumberPage} from './pages/TelephoneNumberPage'
import {InfoPage} from './pages/InfoPage'
import Navbar from "./components/Navbar/Navbar";



function App() {
  return (

      <BrowserRouter>
          <Navbar/>

        <Switch>
            <Route path = "/home" component = {HomePage}/>
            <Route path = "/telephone" component = {TelephoneNumberPage}/>
            <Route path = "/info" component = {InfoPage}/>
        </Switch>

      </BrowserRouter>
  );
}

export default App;
