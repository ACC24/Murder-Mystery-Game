import React from "react";

function Message ({name, timeExpired}) {
   
    if (timeExpired) {
        return <p>Oh no! You ran out of time!</p>
    }
    else {
        return (
            <>
            <h4>
            You guessed {name}
            </h4>
            {name==="wife" ? <h6>Congratulations!! You guessed correctly.
                Mrs Banks had found a letter from Mr banks' mistress, she ambushed them by the fountain on the night they were to meet up. To weaken him she fed him sleeping pills in his soup, and a very drowsy Mr Banks could not fight his wife off when she eventually pushed his head in the fountain.
            </h6>  :
                <h6>Nope! The {name} is not the killer. The real killer was the wife. Better luck next time!
                Mrs Banks had found a letter from Mr banks' mistress, she ambushed them by the fountain on the night they were to meet up. To weaken him she fed him sleeping pills in his soup, and a very drowsy Mr Banks could not fight his wife off when she eventually pushed his head in the fountain.</h6>}
            </>
        )
    }
      
}

export default Message;