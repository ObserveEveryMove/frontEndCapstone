import { connect } from 'react-redux'
import { handleTheme, } from "../../../redux/actions/pomActions"


const Theme = (props) => {

    return (
        <div className='themeOuter'>


            <button 
            title='Random Theme'
            className='themeBtn pomBtn' onClick={props.handleTheme}>🌄</button>
{/* 
            <button 
            title='Night Mode'
            className={!props.nightMode ? 'nightModeBtn pomBtn' : "hide"} onClick={props.handleNight}>🌑</button>


            <button 
            title='Day Mode'
            className={props.nightMode ? 'nightModeBtn pomBtn' : "hide"} onClick={props.handleDay}>🌞</button> */}
        </div>
    )
}

const mapStateToProps = ({pom,port}) => {
    return {
        nightMode: port.nightMode,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        handleTheme: () => dispatch(handleTheme()),
        // handleMode: () => dispatch(handleMode()),
        // handleDay: () => dispatch(handleDay()),
        // handleNight: () => dispatch(handleNight()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Theme)
