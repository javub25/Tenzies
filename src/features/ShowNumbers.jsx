import React from "react";
import NumberState from "@features/NumberState.jsx";
import GenerateRandom from "@features/GenerateRandom.jsx";
import GetViewportWidth from "@features/GetViewportWidth.jsx";

import Confetti from 'react-confetti';

const ShowNumbers = () => 
    {
        const [arrayNum, setArrayNum] = React.useState([]);
        const [messageBtn, setmessage] = React.useState("Roll");
        const [messageGame, setGame] = React.useState("");
        const [viewportWidth, setviewportWidth] = React.useState(window.innerWidth)

        GetViewportWidth(setviewportWidth)
        
       /*We generate 10 numbers between 1 and 6 the first time the component is rendered.*/
        React.useEffect(() => 
        {
            const arrayNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1)     
            setArrayNum([...arrayNumbers])
        }, []);

    return (
        <>
            <div className="pt-5 flex flex-wrap items-center justify-between w-full">
             {
                arrayNum.map((num) => 
                {
                    return(
                        <div className="w-1/5 mobile:w-fit p-4">
                           <NumberState 
                                numArray={num} 
                                MessageBtn={setmessage} 
                                MessageGame={setGame}/>
                        </div>
                    )
                })
              }
             
            </div>
            <button className="mt-4 p-4 bg-blue-400 text-white w-64 mobile:w-full font-roboto" onClick={() => GenerateRandom(arrayNum, setArrayNum, messageBtn, setmessage, setGame)}>
              {messageBtn}
            </button>

            <br/><br/>
            <span className="font-roboto">{messageGame}</span>

            {messageGame === "Congrats, you won!" &&
              
              /*Will render 500 pieces of confettis and we have to identify each moment 
              browser width to make it responsive*/

                <Confetti
                    numberOfPieces={500}
                    width={viewportWidth}
                    className="w-full" 
                />   
            }
       </>
    )
}

export default ShowNumbers;