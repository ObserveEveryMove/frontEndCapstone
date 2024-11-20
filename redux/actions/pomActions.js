import * as types from "../types"


export const decrease = () => {
    return {
        type: types.DECREASE
    }
}

export const breakInc = () => {
    return {
        type: types.BREAKINC
    }
}

export const breakDec = () => {
    return {
        type: types.BREAKDEC
    }
}

export const workInc = () => {
    return {
        type: types.WORKINC
    }
}

export const workDec = () => {
    return {
        type: types.WORKDEC
    }
}


export const reset = () => {
    return {
        type: types.RESET
    }
}

export const setTimer = () => {
    return {
        type: types.SET_TIMER
    }
}

export const setSession = () => {
    return {
        type: types.SET_SESSION
    }
}

export const flipTimer=(onOrOff)=>{
    return {
        type: types.FLIP_TIMER,
        payload:onOrOff,
    }
}

export const handleAlarm = (snooze) => {
    return {
        type: types.HANDLE_ALARM,
        payload: snooze,
    }
}

export const alarm = () => {
    return {
        type: types.ALARM,
    }
}

export const handleVolume = (e) => {
    return {
        type: types.VOLUME,
        payload:e
    }
}

export const handleTheme = () => {
    return {
        type: types.THEME,

    }
}

// export const handleMode = () => {
//     return {
//         type: types.NIGHTMODE,
//     }
// }

export const handleSettings = () => {
    return {
        type: types.SETTINGSMODAL,
    }
}