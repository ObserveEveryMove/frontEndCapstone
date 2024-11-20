import * as types from "../types"

let initialState = {
    window: window.innerWidth || 0,
    hamburger: false,

    nightMode: false,

    firstName: "",
    lastName: "",
    email: "",
    textArea: "",

    message: "",

    emailReg: /^([a-z\d]+)@([a-z\d-]+)\.([a-z]{2,8})/i,
    nameReg: /^([a-z-.]{1,})$/i,

    projects: ["pomodoro-clock", "drum-pad", "quote-machine", "magic-eightBall"],
    counter: 0,

}

const portReducer = (state = initialState, action) => {

    // console.log(state.lastName)
    switch (action.type) {

        case types.GET_WINDOW_SIZE:
            return {
                ...state,
                window: action.payload
            }
        case types.OPEN_HAMBURGER:
            return {
                ...state,
                hamburger: true
            }
        case types.CLOSE_HAMBURGER:
            return {
                ...state,
                hamburger: false
            }

        case types.HANDLE_INPUT:
            let { name, value } = action.payload
            return {
                ...state,
                [name]: value
            }

        case types.HANDLE_SUBMIT:
            if (!state.emailReg.test(state.email)) {
                return {
                    ...state,
                    message: `Invalid email address`,
                    email: ""
                }
            }
            else {

                return {
                    ...state,
                    message: `Thank you ${state.firstName}, I will contact you.`,
                    firstName: "",
                    lastName: "",
                    email: "",
                    textArea: "",
                }
            }

        case types.CLEAR_MESSAGE:
            return {
                ...state,
                message: "",
            }

        case types.HANDLE_NIGHT:
            return {
                ...state,
                nightMode: !state.nightMode,
            }


        case types.SCROLL_PROJECTS:

            if (state.counter < 3) {
                return {
                    ...state,
                    counter: state.counter + 1,
                }
            }
            else if (state.counter ===3){
                return {
                    ...state,
                    counter: 0,
                }
            }
            else {
                return {
                    ...state,
                    counter: 0,
                }
            }


        default:
            return state
    }
}

export default portReducer