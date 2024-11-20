
import reduxImg from "../../assets/data/pictures/redux1.png"
import reactImg from "../../assets/data/pictures/reactIcon2.png"
import { connect } from "react-redux"


const Footer = (props) => {
    return (
        <>
            <div className={!props.nightMode?"footerCont secondaryBg limeBorder":"secondaryNightMode footerCont limeBorder"}>
                <div className="creditsCont">
                    <h4 className="secondaryTxt footerTxt">Brought to you by:</h4>
                    <img
                        className="reactLogo"
                        alt="reactLogo"
                        src={reactImg}>
                    </img>
                    <img
                        className="reduxLogo"
                        alt="reduxLogo"
                        src={reduxImg}>
                    </img>
                </div>

                <div className="copyrightCont">
                    <p>Copyright 2024</p>
                    <p>OeM est. 2016 </p>
                    <p>All rights reserved.</p>
                </div>

            </div>
        </>
    )
}

const mapStateToProps = ({port}) => {
    return {
        nightMode: port.nightMode,
    }
}

export default connect(mapStateToProps,null)(Footer)