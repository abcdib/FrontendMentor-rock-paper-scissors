import React from 'react'
import logo from "../images/logo.svg"
import { useGlobalContext } from './Context'
const Navbar = () => {
    const { score } = useGlobalContext();
    return (
        <div className='navbar'>
            <div className="logo-area">
                <img className='logo-img' src={logo} alt="Rock Paper Scissor" />
            </div>
            <div className="score-area">
                <div className="score-card">
                    <h6>score</h6>
                    <h3>{score}</h3>
                </div>
            </div>
        </div>
    )
}

export default Navbar