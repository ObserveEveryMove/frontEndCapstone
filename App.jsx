import React from "react"
import { Routes, Route } from "react-router-dom"
import { connect } from "react-redux"
import actions from "./redux/actions"

import "./App.css"

import Landing from "./views/Landing"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Projects from "./components/pages/Projects"
import Resume from "./components/pages/Resume"

import Nav from "./components/nav/Nav"


class App extends React.Component {
    componentDidMount() {
        this.props.getWindowSize(window.innerWidth)
        window.addEventListener("resize", () => this.props.getWindowSize(window.innerWidth))
    }
    render() {
        return (
            <>
            <div className={!this.props.nightMode?"appWrap":"primaryNightMode"}>


                <Routes>

                    <Route element={<Nav />} >

                        <Route path='/' element={<Landing />} />

                        <Route path="/about" element={<About />} />

                        <Route path="/contact" element={<Contact />} />

                        <Route path="/Projects/*" element={<Projects />} />
                        
                        <Route path="/resume" element={<Resume />} />
                  
                    </Route>

                </Routes>


            </div>
            </>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getWindowSize: (size) => dispatch(actions.getWindowSize(size))
    }
}

const mapStateToProps = ({port}) => {
    return {
        nightMode: port.nightMode,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)