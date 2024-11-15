import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Upload from './components/Upload';
import Notifications from './components/Notifications';
import Messages from './components/Messages';
import Reels from './components/Reels';
import Explore from './components/Explore';
import Settings from './components/Settings';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/upload" component={Upload} />
                    <Route path="/notifications" component={Notifications} />
                    <Route path="/messages" component={Messages} />
                    <Route path="/reels" component={Reels} />
                    <Route path="/explore" component={Explore} />
                    <Route path="/settings" component={Settings} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
