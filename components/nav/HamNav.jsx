import { connect } from "react-redux"

// import { Link, Outlet } from "react-router-dom"
import actions from "../../redux/actions"

import Hamburger from "./Hamburger";
import NavBar from "./NavBar";

const HamNav = (props) => {
    // const menu = {
    //     width: "100%",
    //     maxWidth: "200px",
    //     position: "absolute",
    //     top: "0",
    //     left: "0",
    //     zIndex: "5",
    //     display: "flex",
    //     flexDirection: "column",
      
      
    // }

    return (

        <>
     
            {
             
                !props.hamburger ?
                <Hamburger/>:
                    
                <div  className="hamNav">
                     <NavBar isHam={true}/>
                   <button onClick={props.closeHamburger}>Close Menu</button>
            
                </div>
                
            }


        </>
    )
}

const mapStateToProps = ({ port }) => {
    return {
        hamburger: port.hamburger,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeHamburger: () => dispatch(actions.closeHamburger()),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HamNav)