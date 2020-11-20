import React from "react";

function Message ({name, timeExpired}) {
   
    if (timeExpired) {
        return <p>Oh no! You ran out of time!</p>
    }
    else {
        return (
            <>
            <p>
            You guessed {name}
            </p>
            {name==="wife" ? <p>Congratulations!!</p>  :
                <p>Nope! The {name} is not the killer. Good luck next time!</p>}
            </>
        )
    }
      
}

export default Message;