let numSelected = null;
let tileSelected = null;
let errors = 0;

let board = [
    '--74916-5',
    '2---6-3-9',
    '-----7-1-',
    '-586----4',
    '--1----9-',
    '--62--187',
    '-6-4-7--2',
    '67-83----',
    '81-48----'
];

let solution = [
    '387491625',
    '241568379',
    '569327418',
    '758619234',
    '123784596',
    '496253187',
    '934176852',
    '675832941',
    '812945763'
];

window.onload = function(){
    setGame();
    setTile();
}

function setGame() {
    // Digits
    for(let i = 1; i <= 9; i++){
        let number = document.createElement('div');
        number.id = i;
        number.innerText = i;
        // console.log(number);
        number.classList.add('number');
        document.getElementById('digits').appendChild(number);
    }
}

function setTile() {
    for (let i = 0; i < board.length; i++){
        // console.log(board[i]);
        for(let j = 0; j < board[i].length; j++){
            let tile = document.createElement('div');
            tile.innerText = board[i][j];
            tile.id = `${i}-${j}`;
            // console.log(tile);
            tile.classList.add('tile');
            document.getElementById('board').appendChild(tile);
        }
    }
}