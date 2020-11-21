import React, { useState } from 'react'
import { Modal, ModalBody, Button } from "reactstrap";

function Clues(props) {


    return (<>
        {props.showClue && <div>
            <Modal style={{
                marginTop:"20px",
                fontFamily: "Underdog, cursive",
                borderRadius: "25px",
                opacity:"0.8",
                textAlign:"center"
            }} toggle={() => props.toggle()} isOpen={props.showClue}>

                <ModalBody style={{
                 
                }}>
                    <p>{props.message}</p>
                </ModalBody>
                <Button style={{
                      color: "yellow",
                      borderColor: "yellow",
                      backgroundColor: "gray",
                      borderRadius: "25px",
                      fontWeight: "bolder",
                      letterSpacing: "1.5px",
                      fontFamily: "Underdog, cursive",
                }} onClick={() => props.toggle()}>
                    Exit
        </Button>

            </Modal>
        </div>}
    </>)
}

export default Clues;






