import { Routes, Route, Link } from "react-router-dom"
import Project1 from "../projects/Project1"
import Project2 from "../projects/Project2"
import Project3 from "../projects/Project3"
import Project4 from "../projects/Project4"

import ProjectViews from "../projects/ProjectViews"

import Footer from "../nav/Footer"
import { connect } from "react-redux"

import actions from "../../redux/actions/index"

const Projects = (props) => {


    // let arr = ["pomodoro-clock", "drum-pad", "quote-machine", "magic-eightBall"]

    // const pickProj = (arr) => {
    //     let num = 0
    //     console.log(num)
    //     if (num <= arr.length) {
    //         num = num + 1
    //     }
    //     return arr[num]
    // }

    // pickProj(arr)
    return (
        <>
            <div className="projectsOuter animate__animated animate__fadeIn">

                <div className={!props.nightMode ? "projectLinks secondaryBg limeBorder" : "secondaryNightMode limeBorder projectLinks"}>

                    <Link
                        className="secondaryTxt projectLinkTxt"
                        to="pomodoro-clock">
                        Pomodoro Clock</Link>

                    <Link
                        className="secondaryTxt projectLinkTxt"
                        to="drum-pad">
                        Drum Pad</Link>

                    <Link
                        className="secondaryTxt projectLinkTxt"
                        to="quote-machine">
                        Quote Machine</Link>

                    <Link
                        className="secondaryTxt projectLinkTxt"
                        to="magic-eightBall">
                        Magic Eight Ball</Link>

                </div>



                <div className={!props.nightMode ? "projectsCont secondaryBg limeBorder" : "secondaryNightMode projectsCont limeBorder"}>

                    <Routes>

                        <Route
                            path="pomodoro-clock"
                            element={<Project1 />} />

                        <Route
                            path="drum-pad"
                            element={<Project2 />}
                        />

                        <Route
                            path="quote-machine"
                            element={<Project3 />}
                        />
                        <Route
                            path="magic-eightBall"
                            element={<Project4 />}
                        />

                        <Route
                            path="project-views"
                            element={<ProjectViews />}
                        />


                    </Routes>


                </div>
                <Link
                    className="primaryTxt projectLinkTxt"
                    to={props.projects[props.counter]}
                >
                    <button
                        onClick={props.scrollProjects}
                        className="fas fa-arrow-alt-circle-right scrollBtn primaryTxt"></button>

                </Link>
            </div>
            <Footer />
        </>
    )
}

const mapStateToProps = ({ port }) => {
    return {
        nightMode: port.nightMode,
        project: port.project,
        projects: port.projects,
        counter: port.counter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        scrollProjects: () => dispatch(actions.scrollProjects())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)