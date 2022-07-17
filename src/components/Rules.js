import React from 'react'
import { useGlobalContext } from './Context'
import rulesImg from "../images/image-rules.svg"
import close from "../images/icon-close.svg"
const Rules = () => {
    const { showRules, setShowRules } = useGlobalContext();
    return (
        <>
            <div className='rules-area'>
                <button className='rules-btn' onClick={() => setShowRules(true)}>Rules</button>
            </div>
            {showRules &&
                <>
                    <div className="rules-container">
                        <h2 className='rules-heading'>Rules</h2>
                        <img src={rulesImg} alt="" />
                        <div className="close-icon" onClick={() => setShowRules(false)}>
                            <img src={close} alt="" />
                        </div>
                    </div>
                    <div className="overlay"></div>
                </>
            }
        </>
    )
}

export default Rules