import React, { Component } from "react";
import Timer from 'react-compound-timer';

class Gameboard extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Timer
                initialTime={1200000}
                startImmediately={false}
                direction="backward"
            >
                {({ start, stop, reset }) => (
                    <React.Fragment>
                        <div>
                            <Timer.Minutes /> minutes
                            <Timer.Seconds /> seconds
                        </div>
                        <br />
                        <header>
                            <button onClick={start}>Start</button>
                            <button onClick={stop}>Stop</button>
                            <button onClick={reset}>Reset</button>
                            
                        </header>
                    </React.Fragment>
                )}
            </Timer>
        );
    }
}
export default Gameboard;