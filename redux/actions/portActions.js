import * as types from "../types"
// import { v4 as uuid } from "uuid"


export const getWindowSize = (size) => {
    return{
        type: types.GET_WINDOW_SIZE,
        payload: size,
    }
}
export const openHamburger = () =>{
    return {
        type: types.OPEN_HAMBURGER
    }
}
export const closeHamburger = ()=>{
    return {
        type: types.CLOSE_HAMBURGER
    }
}

export const handleInput = (input) => {
    return {
        type: types.HANDLE_INPUT,
        payload: input
    }
}

export const handleSubmit = (e) => {
    e.preventDefault()
    return {
        type: types.HANDLE_SUBMIT,
        payload: e,
    }
}

export const clearMessage = () => {
    return {
        type: types.CLEAR_MESSAGE,
    }
}

export const handleNight = () => {
    return {
        type: types.HANDLE_NIGHT,
    }
}

export const scrollProjects = () => {
    return {
        type: types.SCROLL_PROJECTS
    }
}