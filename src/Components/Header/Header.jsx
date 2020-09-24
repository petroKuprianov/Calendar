import React ,{Component} from 'react';
import { NavLink} from 'react-router-dom';
import  '../Header/Header.scss';
import logo from '../Header/Logo.jpg'

export default class Header extends Component {
    render(){
        return(
            <header className="header">
                <NavLink to="/"><img className="header__logo" src={logo} alt="Logo"/></NavLink>
                <nav className="header__nav">
                    <NavLink to="/"  className="header__nav-home">Home</NavLink>
                    <NavLink to="/About" className="header__nav-about" activeClassName="header__active">About us</NavLink>
                </nav>
            </header>
        )
    }
}