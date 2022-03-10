import "./DislikeButton.css"
import React, {useState} from "react";

const DislikeButton = (props) => {

    const [buttonClass, setButtonClass] = useState("inactive");

    function handleClick(){
        if(buttonClass === "inactive"){
            setButtonClass("disliked")
        }
        else{
            setButtonClass("inactive")
        }
    }

        return ( 
            <div>
                <button className={buttonClass} onClick={handleClick}>{props.message}</button>
            </div>
        );

}
 
export default DislikeButton;