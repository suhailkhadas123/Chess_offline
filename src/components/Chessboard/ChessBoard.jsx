import React from 'react'
import '../Chessboard/chessboard.css';
import Tile from '../Tile/Tile';
import { bishop_b , bishop_w , king_b , king_w , knight_b , knight_w , pawn_b , pawn_w , queen_b , queen_w , rook_b , rook_w } from "../images/pieces_images.js"
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]
const verticalAxis = ["8", "7", "6", "5", "4", "3", "2", "1"]
const pieces=[];

for (let i=0; i<8 ;i++){
pieces.push({ image: pawn_b , x:i , y:1});
}

for (let i=0; i<8 ;i++){
pieces.push({ image: pawn_w , x:i , y:6});
}
pieces.push({ image: king_w , x:3 , y:7}); 
pieces.push({ image: king_b , x:4 , y:0}); 
pieces.push({ image: queen_w , x:4 , y:7}); 
pieces.push({ image: queen_b , x:3 , y:0}); 
pieces.push({ image: bishop_w , x:5 , y:7}); 
pieces.push({ image: bishop_b , x:2 , y:0});

pieces.push({ image: bishop_b , x:5 , y:0}); 
pieces.push({ image: bishop_w , x:2 , y:7});
pieces.push({ image: knight_b , x:6 , y:0}); 
pieces.push({ image: knight_w , x:1 , y:7});
pieces.push({ image: knight_w , x:6 , y:7}); 
pieces.push({ image: knight_b , x:1 , y:0});  
   
pieces.push({ image: rook_w , x:0 , y:7}); 
pieces.push({ image: rook_b , x:0 , y:0});   
pieces.push({ image: rook_w , x:7 , y:7}); 
pieces.push({ image: rook_b , x:7 , y:0}); 

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