import React from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux"


import actions from "../../redux/actions"


const NavBar = (props) => {
    const navStyle = {
        hamburger: {
            width: "100%",
            display: "flex",
            flexDirection: "column"
        },
        navBar: {
            width: "100%",
            maxWidth: "90vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            fontSize: "25px",
            borderRadius: "1rem",
            paddingTop: "10px",
            paddingBottom: "10px",
        }
    }
    return (
        <>
            <nav
                style={props.isHam ? navStyle.hamburger : navStyle.navBar}
                className={!props.nightMode ? "limeBorder secondaryBg navBar" : "secondaryNightMode limeBorder navBar"}>

                <Link className="navTxt primaryTxt" to={"/"}> Home</Link>

                <Link className="navTxt primaryTxt" to={"/about"}>About</Link>

                <Link className="navTxt primaryTxt" to={"/Projects/pomodoro-clock"}>Projects</Link>

                <Link className="navTxt primaryTxt" to={"/resume"}>Resume</Link>

                <Link className="navTxt primaryTxt" to={"/contact"}>Contact</Link>



                <button
                    onClick={!props.nightMode ? props.handleNight : null}
                    className={!props.nightMode ? "fas settingsButton secondaryTxt" : "hide"} 
                    >☀
                </button>

                <button
                    onClick={props.nightMode ? props.handleNight : null}
                    className={props.nightMode ? "fas fa-cloud-moon settingsButton secondaryTxt" : "hide"}
                >
                </button>

            </nav>

        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleNight: () => dispatch(actions.handleNight())
    }
}

const mapStateToProps = ({ port }) => {
    return {
        nightMode: port.nightMode,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)