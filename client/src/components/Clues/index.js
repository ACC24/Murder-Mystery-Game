import React, { useState } from 'react'
import { Modal, ModalBody, Button } from "reactstrap";

function Clues(props) {


    return (<>
        {props.showClue && <div>
            <Modal toggle={() => props.toggle()} isOpen={props.showClue}>

                <ModalBody>
                    <p>{props.message}</p>
                </ModalBody>
                <Button onClick={() => props.toggle()}>
                    Exit
        </Button>

            </Modal>
        </div>}
    </>)
}

export default Clues;






