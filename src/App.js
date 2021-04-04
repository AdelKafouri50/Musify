
import { useState } from 'react'; 
import AddSong from './components/add-song/add-song.component.jsx';
import Login from './components/login/login.component.jsx';
import Register from './components/register/register.component.jsx';
import Home from './components/home/home.component.js';
import Main from './components/main/main.component.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


export default function App() {

const [loggedIn, setloggedIn] = useState(false)


        return (
            <div className='App'>
                <Router>
                <Main loggedIn={loggedIn} setloggedIn={setloggedIn} />
                    <Switch>
                        <Route path='/home' exact>
                            <Home/>
                        </Route>
                        <Route path='/login'>
                            <Login loggedIn={loggedIn} setloggedIn={setloggedIn} />
                        </Route>
                        <Route path='/register'>
                            <Register />
                        </Route>
                        <Route path='/addsong'>
                            <AddSong />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
}

