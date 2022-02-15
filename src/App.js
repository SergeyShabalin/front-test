import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {TelephoneNumberPage} from './pages/TelephoneNumberPage'
import {InfoPage} from './pages/InfoPage'
import Navbar from "./components/Navbar/Navbar";
import './App.css'


function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Navbar/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route path="/telephone" component={TelephoneNumberPage}/>
                    <Route path="/info" component={InfoPage}/>
                    <Route path="*">
                        <Redirect to="/home"/>
                    </Route>
                </Switch>
            </div>


        </BrowserRouter>
    );
}

export default App;
