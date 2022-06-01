import React from 'react'

import './Navbar.css'
import { MenuItems } from "./MenuItems"
import gordon from '../../assets/gordon.png'

class Navbar extends React.Component {

    state = { clicked: false }

    // Sets the state to true/false for icon click change
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <>
                <nav className = "navbarItems">
                    <a href="/profile">
                        <img className="profPic" src = {gordon} alt = ""/>
                    </a>


                    <a className = "navbarLogo" href = "."> Pantri </a>

                    <div className = "menu-icon" onClick = {this.handleClick}>
                        <i className = {this.state.clicked ? 'fas fa-times': 'fas fa-bars'}> </i>
                    </div>
                    <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

                        {MenuItems.map((item, index) => {
                            return (
                                <li key = {index}>
                                    <a className = {item.cName} href = {item.url}>
                                        {item.title}  
                                    </a>
                                </li>
                            )
                        })}
   
                    </ul>
                    
                </nav>
            </>
        )
    }
}
export default Navbar
