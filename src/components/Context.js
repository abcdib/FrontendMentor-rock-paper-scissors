import React, { useContext, useEffect, useState } from "react"

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [CPUChoice, setCPUChoice] = useState(0);
    const [myChoice, setMyChoice] = useState(0);
    const [hasWon, setHasWon] = useState("");
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(true);
    const [showRules, setShowRules] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem('gameScore');
        const scoreData = JSON.parse(data);
        if (scoreData)
            setScore(scoreData)
    }, [])
    useEffect(() => {
        const data = JSON.stringify(score);
        localStorage.setItem('gameScore', data);
    }, [score])

    const handleClick = (id) => {
        if (isPlaying === false)
            return;
        setLoading(true);
        setResult(true);

        let newScore = score;
        setMyChoice(id);
        const num = Math.floor(Math.random() * 3);
        setCPUChoice(num);
        if (id === num) {
            setHasWon("draw");
        }
        if (id === 0) {
            if (num === 1) {
                setHasWon("win");
                newScore++;
            }
            else if (num === 2) {
                setHasWon("lose");
            }
        }
        else if (id === 1) {
            if (num === 0) {
                setHasWon("lose");
            }
            else if (num === 2) {
                setHasWon("win");
                newScore++;
            }
        }
        else if (id === 2) {
            if (num === 0) {
                setHasWon("win");
                newScore++;
            }
            else if (num === 1) {
                setHasWon("lose");
            }
        }
        setIsPlaying(false);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);
        const timer2 = setTimeout(() => {
            setResult(false);
            setScore(newScore);
        }, 1000);
        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
        }
    }
    return <AppContext.Provider value={{ isPlaying, setIsPlaying, handleClick, myChoice, CPUChoice, hasWon, score, loading, result, showRules, setShowRules }}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext }

