import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Right from './components/Right'
import Land from './container/Land';
import Login from './container/Login';
import Details from './container/Details';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                </div>
                <div id='main'>
                    <div id="content">
                        <Route path='/home' component={Home}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/land' component={Land}/>
                        <Route path='/details/:id' component={Details}/>
                    </div>
                    <div id="sidebar">
                        <Right/>
                    </div>
                </div>
            </Router>
        )
    }
}