import React from 'react'
import rock from "../images/icon-rock.svg"
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

const Rock = (props) => {
    const { isPlaying, handleClick } = useGlobalContext();
    console.log(props.showStyle);
    return (
        <div className="box rock" style={(isPlaying) ? defaultStyle : (props.showStyle) ? boxShadowStyle : resultStyle} onClick={() => handleClick(1)}>
            <div className="wrapper">
                <img src={rock} alt="" />
            </div>
        </div>
    )
}

export default Rock