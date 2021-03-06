import "./LikeButton.css"
import React, {useState} from "react";

const LikeButton = (props) => {

    const [buttonClass, setButtonClass] = useState("inactive");

    function handleClick(){
        if(buttonClass === "inactive"){
            setButtonClass("liked")
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
 
export default LikeButton;