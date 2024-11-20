import Pomodoro from "./Pomodoro"
import Drum from "./Drum"
import MagicEightBall from "./MagicEightBall"
import Quote from "./Quote"

// import { Routes, Route, Link } from "react-router-dom"


const ProjectViews = () => {
    return (
        <>
        <div className="projectViewsOuter">
            <div className="projectViewsInner">
                
                <Pomodoro />
                <Drum />
            </div>

            <div className="projectViewsInner">
                <MagicEightBall />
                <Quote />
            </div>
            </div>
        </>
    )
}


export default ProjectViews