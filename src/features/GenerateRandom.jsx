const GenerateRandom = (arrayNum, setArrayNum, messageBtn, setMessage, setGame) => 
{
    const ItemList = document.querySelectorAll(".item-list")

    if(messageBtn === "Start New Game")
    {
        /*generates an array of 10 random numbers between 1 and 6. */
         const arrayNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1)     
         setArrayNum([...arrayNumbers])
         
         //Let's change Start New Game message by Roll
         setMessage("Roll")
         //Each number will no longer be selected, because we start a new game.
         ItemList.forEach((item => item.classList.replace("item-clicked", "item-unclicked")))
         setGame("");
    }
    else
    {

        const arrayNumbers = [...arrayNum]

        ItemList.forEach((item, i) => 
        {
            if((item.classList.contains('item-unclicked')))
            {
                const random = Math.floor(Math.random() * 6) + 1;
                //Change the numbers with the item-unclicked class between a number from 1 and 6
                arrayNumbers[i] = random;
            }
        })
    
        setArrayNum((oldValue => 
        {
            return oldValue.map((item, i) => 
            {
                /*When the numbers have changed randomly, they will be replaced by the new ones*/
                if(oldValue[i]!==arrayNumbers[i]) return arrayNumbers[i];
                /*Numbers that have not been changed and have the class item-clicked will be kept.*/
                else return item;
            })
        }))
    }
}

export default GenerateRandom;