import * as portActions from "./portActions"
import * as pomActions from "./pomActions"


const actions = {
    // port actions
    getWindowSize : portActions.getWindowSize,
    openHamburger: portActions.openHamburger,
    closeHamburger: portActions.closeHamburger,
    handleInput: portActions.handleInput,
    handleNight: portActions.handleNight,
    handleSubmit: portActions.handleSubmit,
    clearMessage: portActions.clearMessage,
    scrollProjects: portActions.scrollProjects,

    // pom actions
    decrease: pomActions.decrease,
    breakInc: pomActions.breakInc,
    breakDec: pomActions.breakDec,
    workInc: pomActions.workInc,
    workDec: pomActions.workDec,
    reset: pomActions.reset,
    setTimer: pomActions.setTimer,
    setSession: pomActions.setSession,
    flipTimer: pomActions.flipTimer,
    handleAlarm: pomActions.handleAlarm,
    alarm: pomActions.alarm,
    handleVolume: pomActions.handleVolume,
    handleTheme: pomActions.handleTheme,
    // handleMode: pomActions.handleMode,
    handleSettings: pomActions.handleSettings,
}

export default actions