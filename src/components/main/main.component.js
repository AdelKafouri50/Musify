import {Link} from 'react-router-dom';
import Player from '../song-player.component/song-player.component'
import './main.component.css';
export default function Main({loggedIn, setloggedIn}) {

    

if (!loggedIn){
    return (
        <div className='navContainer'>
            <Link className='home' to='/home'> 
                <div className='logo'>  MUSIFY  </div>
            </Link>

            <div className='linkContainer'>
                <Link to='/register'>
                    <div className='links'>Register</div>
                </Link>

                <Link to='/login'>
                    <div className='links'>Login</div>
                </Link>

                <Link to='/addsong'>
                    <div className='links'>Add Song</div>
                </Link>
            </div>
        </div>
    )
    }
else{
    return (
        <div className='navContainer'>
            <Link className='home' to='/home'> 
                    <div className='logo'>  MUSIFY  </div>
            </Link>

            <div className='linkContainer'>
                <Link to='/register'>
                    <div className='links'>Register</div>
                </Link>

                <Link to='/login'>
                    <div className='links'>Login</div>
                </Link>

                <Link to='/addsong'>
                    <div className='links'>Add Song</div>
                </Link>
                <Link to='/login'>
                    <div onClick={()=>{localStorage.token=''; setloggedIn(false)}} className='links'>Log Out</div>
                </Link>
            </div>
        </div>
    )
}
}