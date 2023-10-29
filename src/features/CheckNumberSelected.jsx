
const CheckNumberSelected = (numSelected, MessageBtn, MessageGame) => 
{
    /*We check that the next 9 numbers are the same as the first one, 
    if they are, the player will have won and a new game will be started.*/

    const isGameOver = numSelected.every((item) => item === numSelected[0])
     
    if(isGameOver)
    {
        MessageBtn("Start New Game");
        MessageGame("Congrats, you won!");
    }
}


export default CheckNumberSelected;