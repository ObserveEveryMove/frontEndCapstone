import { connect } from "react-redux"
import actions from "../../redux/actions"

import git1 from "../../assets/data/pictures/git1.png"
import insta from "../../assets/data/pictures/instaIcon.jpg"
import linked1 from "../../assets/data/pictures/linked1.png"
// import linked2 from "../../assets/data/linked2.png"

import Footer from "../nav/Footer"


const Contact = (props) => {


    setTimeout(() => {
        if(props.message[0] === "T"){
             props.clearMessage()
        }
        
    }, 4000)

    return (

        <>

            <div className="contactFormCont">


                <form className={!props.nightMode ? "animate__animated animate__bounceInRight animate__delay-1s contactForm infoCard  secondaryBg limeBorder" : "animate__animated animate__bounceInRight animate__delay-1s secondaryNightMode contactForm infoCard limeBorder primaryNightText"}
                    onSubmit={props.handleSubmit}
                >
                    <h1 className="primaryTxt">Contact Me:</h1>

                    <label htmlFor="firstName">First Name:</label>
                    <input
                        name="firstName"
                        value={props.firstName}
                        type="text"
                        onChange={(e) => props.handleInput(e)}
                        className={props.nameReg.test(props.firstName) ? "confirmed" : "confirm"}
                        required
                    />

                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        name="lastName"
                        type="text"
                        value={props.lastName}
                        onChange={(e) => props.handleInput(e)}
                        className={props.nameReg.test(props.lastName) ? "confirmed" : "confirm"}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        name="email"
                        type="text"
                        value={props.email}
                        onChange={(e) => props.handleInput(e)}
                        className={props.emailReg.test(props.email) ? "confirmed" : "confirm"}
                        required
                    />

                    <label htmlFor="textArea">Send me a message:</label>
                    <textarea
                        onChange={(e) => props.handleInput(e)}
                        name="textArea"
                        value={props.textArea}
                    >
                    </textarea>

                    <button type="submit">Send</button>

                </form>

                <div className={!props.nightMode ? "animate__animated animate__bounceInLeft animate__delay-1s messageCont limeBorder paperShadow secondaryBg primaryTxt" : "animate__animated animate__bounceInLeft animate__delay-1s secondaryNightMode messageCont limeBorder paperShadow primaryTxt"}>
                    {!props.message && <h1 className="messageTxt animate__animated animate__fadeIn">Submit your info to contact me.</h1>}
                    <h1 className="messageTxt">{props.message}</h1>
                    <h2 className="secondaryTxt">Or email me at:</h2>
                    <a className="secondaryTxt" href="mailto:observeeverymove@gmail.com" type="email">observeEveryMove@gmail.com</a>
             
                </div>


                <div className={!props.nightMode ? "animate__animated animate__fadeInDownBig contactLinksCont secondaryBg limeBorder paperShadow secondaryTxt" : "animate__animated animate__fadeInDownBig  secondaryNightMode contactLinksCont limeBorder paperShadow secondaryTxt"}>


                    <h3>I utilize these Platforms:</h3>

                    <img
                        alt="gitHub"
                        src={git1} className="contactIcon">
                    </img>

                    <img
                        alt="instagram"
                        src={insta}
                        className="contactIcon">
                    </img>

                    <img
                        alt="linkedIn"
                        src={linked1} className="contactIcon">
                    </img>

                </div>
            </div>
            <Footer />
        </>

    )
}

const mapStateToProps = ({ port }) => {
    return {
        firstName: port.firstName,
        lastName: port.lastName,
        email: port.email,
        textArea: port.textArea,

        nightMode: port.nightMode,
        message: port.message,
        emailReg: port.emailReg,
        nameReg: port.nameReg,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInput: (e) => dispatch(actions.handleInput(e.target)),
        handleSubmit: (e) => dispatch(actions.handleSubmit(e)),
        clearMessage: () => dispatch(actions.clearMessage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)