import React from 'react'

const Board = ({score1,score2,score3}) => {
    return (
        <div className="Game-Results">
            <p>{score1}</p>
            <p>{score2}</p>
            <p>{score3}</p>
        </div>
    )
}

export default Board
