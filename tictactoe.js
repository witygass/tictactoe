/////////////////////////////////////////////
            //TIC TAC TOE//
/////////////////////////////////////////////
var board = [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]];

var reset = function () {
  console.log('game reset');
  board = [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]];
};

var printBoard = function() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i].join(' | '));
    if (i < 2) { console.log('_________'); }
  }
};

var winningConditionsMet = function() {
  for (let i = 0; i < board.length; i++) {
    var row = board[i];
    if (row[0] === row[1] && row[1] === row[2] && row[2] !== undefined) { return true; }
  }
  for (let j = 0; j < board.length; j++) {
    var col = [board[0][j], board[1][j], board[2][j]];
    if (col[0] === col[1] && col[1] === col[2] && col[2] !== undefined) { return true; }
  }
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] !== undefined) { return true; }
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[2][0] !== undefined) { return true; }
  return false;
};

printBoard();

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');

process.stdin.on('data', function (text) {
  if (text === 'quit\n') {
    done();
  }
  var letterReg = new RegExp(/[xo]/, 'g');
  var positionReg = new RegExp(/\d+/, 'g');
  var splitReg = new RegExp(/[\(\,\)\s*]/, 'g');
  var letter = text.toLowerCase().match(letterReg)[0];
  var position = text.match(positionReg)[0].split('');
  board[position[0]][position[1]] = letter;
  console.log('move: ', letter + ' ' + position);
  printBoard();
  if (winningConditionsMet() === true) {
    console.log(letter, ' wins!!!');
    reset();
  }
});

function done() {
  console.log('Now that process.stdin is paused, there is nothing more to do.');
  process.exit();
}
