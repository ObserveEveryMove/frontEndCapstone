import React from "react"
import { connect } from "react-redux"

// import reactImg from "../assets/data/reactIcon2.png"
// import reduxImg from "../assets/data/redux1.png"

import Footer from "../components/nav/Footer"

const Landing = (props) => {

    return (

        <>
            <div className="landingOuter animate__animated animate__fadeIn">



                <header className={!props.nightMode ? "secondaryBg limeBorder landingCard " : "secondaryNightMode landingCard limeBorder"}>

                    <h1 className="primaryTxt nameBanner">Patrick Keller</h1>

                    <div className="landingCard2">
                        <h2 className="secondaryTxt oemBanner ">Observe</h2>
                        <h2 className="secondaryTxt oemBanner ">Every</h2>
                        <h2 className="secondaryTxt oemBanner ">Move</h2>
                        <h3 className={!props.nightMode ? "oemTag fa-bounce" : "primaryTxt oemTag fa-bounce"}>{"<OeM/>"}</h3>
                    </div>
                </header>



                <div className={!props.nightMode ? "introCard secondaryBg limeBorder paperShadow primaryTxt" : "secondaryNightMode introCard paperShadow limeBorder primaryTxt"}>
                    <div className="innerIntroCard"> <h3 className="introTxt">Hi! Welcome to my personal portfolio. I am a Junior Web Developer who specializes in React and Redux. Feel free to browse my site and get to know me better.</h3></div>

                </div>

            </div>
            <Footer />

        </>
    )
}

const mapStateToProps = ({ port }) => {
    return {
        nightMode: port.nightMode,

    }
}

export default connect(mapStateToProps, null)(Landing)
