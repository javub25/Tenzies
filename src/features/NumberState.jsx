import React from "react";
import CheckNumberSelected from "@features/CheckNumberSelected";
import DieFaces from "@features/DieFaces.jsx"
import 'animate.css';

const NumberState = (props) => 
{
    const [selectState, setState] = React.useState(false);
    const [numSelected, setNumSelected] = React.useState([]);
    const ItemList = document.querySelectorAll(".item-list");

    
    const ChangeState = () => setState((prevOldState => !prevOldState))

    //The first time the component is rendered there will be no number selected so it will be false.
    React.useEffect(() => 
    {
        setState(false);
    }, [])
    
    let stateClass;

    if(selectState) stateClass = "item-clicked"
    else stateClass = "item-unclicked"
    
    /*Stores the selected numbers each time a number is selected or deselected from the selectState.
    is selected or deselected from the selectState.*/
    
    React.useEffect(() => 
    {
        const TempNumSelected = [];
        ItemList.forEach((item => 
        {
            if(item.classList.contains(("item-clicked")))
            {
                //Temporary array that stores the numbers that have the class of selected
                TempNumSelected.push(parseInt(item.children[1].innerText));
                
            }
        }))
        //We update the status of the selected numbers
        setNumSelected([...TempNumSelected]);       
    }, [selectState])


    //We read the selected numbers each time they change.
    React.useEffect(() => {
        //When we have 10 selected we check if they are the same
        if(numSelected.length === 10)
        {
            CheckNumberSelected(numSelected, props.MessageBtn, props.MessageGame);
        }
    }, [numSelected]);

    const MouseOverEffect = (e) => e.target.classList.add("animate__animated", "animate__swing")
    const MouseOutEff = (e) => e.target.classList.remove("animate__animated", "animate__swing")
    
    
    return (
        <div className={`rounded-xl item-list ${stateClass}`} onClick={ChangeState}>
            {/*We show the face of the die based on each number generated.*/}
            <img width="70" src={DieFaces[`face${props.numArray}`]} alt="" className="mobile:w-12 mx-auto"
            onMouseOver={(e) => MouseOverEffect(e)} onMouseOut={(e => MouseOutEff(e))}/>
            {/*We will store the selected numbers from the second child of the div.*/}
            <span key={props.item} className="hidden">{props.numArray}</span>
        </div>
    )
}

export default NumberState;





