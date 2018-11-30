import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class Nav extends Component{
    render(){
        const navStyle ={
            padding: '0 8px'
        }
        return(
            <nav style ={navStyle} className="blue darken-4">
                <div className="nav-wrapper">
                    <Link to ="/" className="brand-logo">FISH COUNTS</Link>
                    <ul className ="right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/hidden">Hidden</Link>
                        </li>
                        <li>
                            <Link to="/public">public</Link>
                        </li>
                        <li>
                            <Link to="/signIn">sign in</Link>
                        </li>
                        <li>
                            <Link to="/signUp">sign Up</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;