import React from 'react'
import '../Chessboard/chessboard.css';

const horizontalAxis=["a","b","c","d","e","f","g","h"]
// const verticalAxis=["1","2","3","4","5","6","7","8"]
const verticalAxis=["8","7","6","5","4","3","2","1"]
function ChessBoard() {
    let block_name=[]
    for(let j=0; j<verticalAxis.length;j++){
        for(let i=0;i<horizontalAxis.length;i++){
            const number = i+j;
            if (number%2!==0){
                block_name.push(<span id="blockname " className="dark_tile">[{horizontalAxis[i]} {verticalAxis[j]}] </span>)
            }else{
                block_name.push(<span id="blockname " className="light_tile">[{horizontalAxis[i]} {verticalAxis[j]}] </span>)
            }
        }
            
      
    }

  return (
    <div id="chessboard">{block_name}</div>
  )
}

export default ChessBoard;