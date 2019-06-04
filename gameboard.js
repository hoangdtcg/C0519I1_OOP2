let GameBoard = function (row, col, board) {
    this.board = board;
    this.row = row;
    this.col = col;
    this.turn = 1;
    this.cells = [];
    this.draw = function () {
        let boardDiv = document.getElementById(board);
        boardDiv.innerHTML = "";
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.col; j++) {
                let cell = new Cell(i, j);
                this.cells.push(cell);
                boardDiv.innerHTML += cell.getHtml();
            }
        }
        console.log(this.cells);
    };
    this.click = function (x, y) {
        let cell = this.cells[x * 20 + y];//lay cell minh click
        console.log(cell);
        if (this.turn === 1) {//check turn
            cell.value = "X";//gan gia tri cho value cua cell
            this.turn = 2;//chuyen turn
        } else {
            cell.value = "O";
            this.turn = 1;
        }
        cell.draw();// hien thi ra gia tri cua cell
    };
    this.check = function (x, y) {
        let cell = this.cells[x][y];
        let count = 1;
        let i = 1;
        while ((y + i < this.col) && this.cells[x][y + i].value === cell.value) {
            count++;
            i++;
        }

    };

}

let game = new GameBoard(20, 20, "game-caro");
game.draw();

function play(x, y) {
    game.click(x, y);
}