import React from 'react'
import paper from "../images/icon-paper.svg"
import { useGlobalContext } from './Context';

const defaultStyle = {
    width: "37vw",
    height: "37vw"
}

const resultStyle = {
    width: "30vw",
    height: "30vw"
}

const boxShadowStyle = {
    ...resultStyle,
    boxShadow: "0px 0px 2px 15px rgba(255, 255, 255, 3%), 0px 0px 2px 40px rgba(255, 255, 255, 3%), 0px 0px 2px 70px rgba(255, 255, 255, 3%)"
}

const Paper = (props) => {
    const { isPlaying, handleClick } = useGlobalContext();
    console.log(props.showStyle);
    return (
        <div className="box paper" style={(isPlaying) ? defaultStyle : (props.showStyle) ? boxShadowStyle : resultStyle} onClick={() => handleClick(0)}>
            <div className="wrapper">
                <img src={paper} alt="" />
            </div>
        </div>
    )
}

export default Paper