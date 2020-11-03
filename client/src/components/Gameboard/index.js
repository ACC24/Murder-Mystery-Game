import React, { Component } from "react";
import Timer from 'react-compound-timer';
import { Link } from "react-router-dom";

class Gameboard extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <section>
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

            <Link to="/" className="btn-flat waves-effect">
                            <i className="material-icons left"></i> Logout
            </Link>
            </section>
            
        );
    }
}
export default Gameboard;