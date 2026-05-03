let board = document.getElementById("board");
let currentPlayer = "X";
let cells = [];

for(let i =0 ; i < 9; i++){
    let cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
    cells.push(cell);


    
    cell.addEventListener("click", function(){
    if(cell.innerHTML === "") {
        cell.innerHTML = currentPlayer;

        if(checkWin()) {
            setTimeout(() => {
                alert(currentPlayer + " Wins!");
            }, 100);
            return;
        }

        if(cells.every(c=> c.innerHTML !== "")){
            setTimeout(()=>{
                alert("Its a Draw!");
            }, 100);
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
});
}
const winPattern = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    function checkWin(){
        return winPattern.some(pattern=>{
            let[a,b,c] = pattern;

            return (
                cells[a].innerHTML !== "" &&
                cells[a].innerHTML === cells[b].innerHTML &&
                cells[a].innerHTML === cells[c].innerHTML
            );
        });
    }
function resetGame() {
  cells.forEach(cell => cell.innerHTML = "");
  currentPlayer = "X";
}