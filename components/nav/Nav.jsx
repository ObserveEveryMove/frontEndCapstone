import { Outlet } from "react-router-dom"
import { connect } from "react-redux"

import HamNav from "./HamNav"
import NavBar from "./NavBar"


const Nav = (props) => {
    // const navBar = {
    //     width: "100vw",
    //     display: "flex",
    //     flexDirection: "row",
    //     alignItems: "center",
    //     justifyContent: "space-around"
    // }
    return (
        <>

            {props.window <= 560 ?
                (
                    <>

                        <div className="hamOpen">
                            <HamNav />



                        </div>
                        <Outlet />
                    </>
                ) :

                (<>
                <div className="navOuter">
                    <div className="navCont"  >

                        <NavBar />
                    </div>
                    </div>
                        <Outlet />
                </>)
            }


        </>

    )
}

const mapStateToProps = ({ port }) => {
    return {
        window: port.window
    }
}

export default connect(mapStateToProps, null)(Nav)