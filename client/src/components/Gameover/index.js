import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "reactstrap";
// import Message from "../Message";
import "./Gameover.css";
import { getUserInput } from "../../actions/inputActions";

class Gameover extends Component {
    
    componentDidMount() {
       this.props.getUserInput();
      }

    onRestartClick = (e) => {
        this.props.history.push("/gameboard");
    };

    onSeeScoresClick = (e) =>
        this.props.history.push("/scoreboard")

    render() {
        const { user } = this.props.auth;
        console.log ({user});
        const {input} = this.props.input
        console.log({input});
       
        

        return (
            <div id="go">
                <div className="row">
                    <div className="translucent-form-overlay col-md-12">
                        <h4
                            style={{
                                marginTop: "1rem",
                                marginRight: "1000px",
                                borderRadius: "25px",
                                backgroundColor: "rgba(54, 54, 54, 0.8)",
                                color: "yellow",
                                letterSpacing: "1.5px",
                                marginLeft: "50px",
                                fontFamily: "Underdog, cursive",
                            }}
                        >
                            <b/> {user.name.split(" ")[0]}!

                            <p>
                                The killer is the {input}
                            </p>
                        </h4>
                        <Button
                            type="submit translucent-form-overlay"
                            style={{
                                color: "yellow",
                                borderColor: "yellow",
                                backgroundColor: "rgba(54, 54, 54, 0.8)",
                                borderRadius: "25px",
                                marginBottom: "1rem",
                                marginLeft: "350px",
                            }}
                            onClick={this.onRestartClick}
                        >
                            Restart
                        </Button>
                        <Button
                            type="submit translucent-form-overlay"
                            style={{
                                color: "yellow",
                                borderColor: "yellow",
                                backgroundColor: "rgba(54, 54, 54, 0.8)",
                                borderRadius: "25px",
                                marginBottom: "1rem",
                                marginLeft: "350px",
                            }}
                            onClick={this.onSeeScoresClick}
                        >
                            See Scores
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

Gameover.propTypes = {
    auth: PropTypes.object.isRequired,
    getUserInput: PropTypes.func.isRequired,
    input: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    input: state.input
});

export default connect(mapStateToProps, {getUserInput})(Gameover);
