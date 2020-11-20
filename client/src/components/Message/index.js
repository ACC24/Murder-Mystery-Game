import React from "react";

function Message ({name}) {
    console.log(name)
    
    return name==="wife" ? 
        <p>Congratulations!!</p>
    :
        <p>Sorry! Good luck next time!</p>
     
}


export default Message;