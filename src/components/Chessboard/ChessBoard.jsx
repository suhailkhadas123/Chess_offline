import React from 'react'
import '../Chessboard/chessboard.css';
import Tile from '../Tile/Tile';
import { bishop_b , bishop_w , king_b , king_w , knight_b , knight_w , pawn_b , pawn_w , queen_b , queen_w , rook_b , rook_w } from "../images/pieces_images.js"
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]
const verticalAxis = ["8", "7", "6", "5", "4", "3", "2", "1"]
const pieces=[];
const pieceImages = {
  bishop_b, bishop_w,
  king_b, king_w,
  knight_b, knight_w,
  pawn_b, pawn_w,
  queen_b, queen_w,
  rook_b, rook_w
};
for (let i=0; i<8 ;i++){
pieces.push({ image: pawn_b , x:i , y:1});
}

for (let i=0; i<8 ;i++){
pieces.push({ image: pawn_w , x:i , y:6});
}

for(let p=0;p<2;p++){
    const type = p===0? "b" : "w";
    const y= p===0? 0:7;

  pieces.push({ image: pieceImages[`rook_${type}`], x: 0, y });
  pieces.push({ image: pieceImages[`knight_${type}`], x: 1, y });
  pieces.push({ image: pieceImages[`bishop_${type}`], x: 2, y });
  pieces.push({ image: pieceImages[`queen_${type}`], x: 3, y });
  pieces.push({ image: pieceImages[`king_${type}`], x: 4, y });
  pieces.push({ image: pieceImages[`bishop_${type}`], x: 5, y });
  pieces.push({ image: pieceImages[`knight_${type}`], x: 6, y });
  pieces.push({ image: pieceImages[`rook_${type}`], x: 7, y });
}


function ChessBoard() {
    let block_name = []
    for (let j = 0; j < verticalAxis.length; j++) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const number = i + j;
            let image=undefined;
            pieces.forEach((p)=>{
                if(p.y===j && p.x===i){
                    image=p.image;
                }
            })
            block_name.push(<Tile number={number} image={image} />)
        }


    }

    return (
        <div id="chessboard">{block_name}</div>
    )
}

export default ChessBoard;