const player_X = 'x';
const player_O = 'O';
const possibleWins= 
[
    [0, 1, 2],
    [0, 4, 8],
    [0, 4, 6],
    [1, 4, 7],
    [2, 5, 8]  
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6]

];

onload=function()
{ 
    
    var childrenBoard = document.querySelectorAll('#board div');
    const childLen = childrenBoard.length;
    var position = 0;
    var curr = player_X;
    var gamePlay = [];

    while (position <= childLen-1)
    { 
        childrenBoard[position].className+='square';
        childrenBoard[position].addEventListener('click', handleClicked, { once: true});    
        childrenBoard[position].addEventListener('mouseover', hoverOver);
        childrenBoard[position].addEventListener('mouseout', hoverOut);
        document.querySelector("button").addEventListener('click', newGame);  
        position += 1;
    }


    function handleClicked(clickedEvent){               
        if (curr == player_X){ 
            curr= player_O; 
            this.innerHTML='X';
            this.classList.add('X'); 
            gamePlay.push(this.innerHTML);
            whoWon();
        }
        else
        {
               
            curr= player_X;
            this.innerHTML='O';
            this.classList.add('O');  
            gamePlay.push(this.innerHTML);  
            whoWon();    
        }   
    } 

    

    function hoverOver(hoverEvent)
    {
        this.classList.add('hover');
    }
    

    function hoverOut(hoveroutEvent)
    {
            this.classList.remove('hover');
    }



    function whoWon()
    {
        if(childrenBoard[0].innerHTML !== "" && childrenBoard[0].innerHTML === childrenBoard[1].innerHTML && childrenBoard[0].innerHTML === childrenBoard[2].innerHTML){
            document.getElementById("status").className = "you-won";
            document.getElementById("status").textContent = "Congratulations! " + childrenBoard[0].innerHTML + " is the winner!";
        }
        else if(childrenBoard[3].innerHTML !== "" && childrenBoard[3].innerHTML === childrenBoard[4].innerHTML && childrenBoard[3].innerHTML === childrenBoard[5].innerHTML){
            document.getElementById("status").className = "you-won";
            document.getElementById("status").textContent = "Congratulations! " + childrenBoard[3].innerHTML + " is the winner!";
        }
        else if(childrenBoard[6].innerHTML !== "" && childrenBoard[6].innerHTML === childrenBoard[7].innerHTML && childrenBoard[6].innerHTML === childrenBoard[8].innerHTML){
            document.getElementById("status").className = "you-won";
            document.getElementById("status").textContent = "Congratulations! " + childrenBoard[6].innerHTML + " is the winner!";
        }
        else if(childrenBoard[0].innerHTML !== "" && childrenBoard[0].innerHTML === childrenBoard[3].innerHTML && childrenBoard[0].innerHTML === childrenBoard[6].innerHTML){
            console.log(childrenBoard[0].innerHTML);
            document.getElementById("status").className = "you-won";
            document.getElementById("status").textContent = "Congratulations! " + childrenBoard[0].innerHTML + " is the winner!";
        }
        else if(childrenBoard[1].innerHTML !== "" && childrenBoard[1].innerHTML === childrenBoard[4].innerHTML && childrenBoard[1].innerHTML === childrenBoard[7].innerHTML){
            document.getElementById("status").className = "you-won";
            document.getElementById("status").textContent = "Congratulations! " + childrenBoard[1].innerHTML + " is the winner!";          
        }
        else if(childrenBoard[2].innerHTML !== "" && childrenBoard[2].innerHTML === childrenBoard[5].innerHTML && childrenBoard[2].innerHTML === childrenBoard[8].innerHTML){
            document.getElementById("status").className = "you-won";
            document.getElementById("status").textContent = "Congratulations! " + childrenBoard[2].innerHTML + " is the winner!";
        }
        else if(childrenBoard[0].innerHTML !== "" && childrenBoard[0].innerHTML === childrenBoard[4].innerHTML && childrenBoard[0].innerHTML === childrenBoard[8].innerHTML){
            document.getElementById("status").className = "you-won";
            document.getElementById("status").textContent = "Congratulations! " + childrenBoard[0].innerHTML + " is the winner!";
        }
        else if(childrenBoard[2].innerHTML !== "" && childrenBoard[2].innerHTML === childrenBoard[4].innerHTML && childrenBoard[2].innerHTML === childrenBoard[6].innerHTML){
            document.getElementById("status").className = "you-won";
            document.getElementById("status").textContent = "Congratulations! " + childrenBoard[2].innerHTML + " is the winner!";
        }
    }



    function newGame()
    {
        for(z=0; z<childLen; z++)
        {
            childrenBoard[z].classList.remove('X');
            childrenBoard[z].classList.remove('O');
            document.getElementById("status").textContent = "Move your mouse over a square and click to play an X or an O.";
            document.getElementById("status").classList.remove("you-won");
            childrenBoard[z].innerHTML = "";
            curr = player_X;
            childrenBoard[z].addEventListener('click', handleClicked, { once: true});
        }
    }    
}