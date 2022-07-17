import React from 'react'
import Paper from './Paper'
import Rock from './Rock'
import Scissors from './Scissors'
import triangle from "../images/bg-triangle.svg"
import { useGlobalContext } from './Context'

const Content = () => {
    const { isPlaying, setIsPlaying, myChoice, CPUChoice, hasWon, loading, result } = useGlobalContext();

    return (
        <div className='content-area'>
            {(isPlaying) ? <div className="grid-area" style={{ backgroundImage: `url(${triangle})` }}>
                <Paper />
                <Scissors />
                <Rock />
            </div> : <>
                <div className="grid-area show-result-large">
                    {myChoice === 0 && <Paper showStyle={hasWon === "win"} />}
                    {myChoice === 1 && <Rock showStyle={hasWon === "win"} />}
                    {myChoice === 2 && <Scissors showStyle={hasWon === "win"} />}
                    {!loading && CPUChoice === 0 && <Paper showStyle={hasWon === "lose"} />}
                    {!loading && CPUChoice === 1 && <Rock showStyle={hasWon === "lose"} />}
                    {!loading && CPUChoice === 2 && <Scissors showStyle={hasWon === "lose"} />}
                    {!loading && <h3 className='sub-head'>You Picked</h3>}
                    {!loading && <h3 className='sub-head'>The House Picked</h3>}
                    <div className='result-area'>
                        {!result && hasWon === "win" && <h2 className='result-heading'>You Win</h2>}
                        {!result && hasWon === "lose" && <h2 className='result-heading'>You Lose</h2>}
                        {!result && hasWon === "draw" && <h2 className='result-heading'>Draw</h2>}
                        {!result && <button className="play-btn" onClick={() => setIsPlaying(true)}>Play Again</button>}
                    </div>
                </div>
            </>
            }
        </div>
    )
}

export default Content