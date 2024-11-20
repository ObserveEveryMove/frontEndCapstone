import React from "react"
import { connect } from "react-redux"
import quotes from "../../assets/data/quotes.json"



class Project3 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            quotes: [],
            quote: {},
            colors: ["green", "lightBlue", "dodgerBlue", "lightGreen", "gray", "gold", "orange", "seaGreen", "red", "tomato", "slateBlue", "violet", "mediumSeaGreen"],
            color: {}
        }
        this.handleClick = this.handleClick.bind(this)

    }

    componentDidMount() {
        this.setState({
            ...this.state,
            quotes,
        })

        setTimeout(() => {
            this.handleClick()
        }, 1);

    }


    handleClick() {
        let random = Math.floor(Math.random() * this.state.quotes.length)
        let colorPick = Math.floor(Math.random() * this.state.colors.length)
    
        this.setState({
            ...this.state,
            color :this.state.colors[colorPick],
            quote: this.state.quotes[random],
        })
    }
    render() {
        return (
            <>
                <div className="quoteCont" >

                    <div className={!this.props.nightMode?"quoteCard":"primaryNightMode quoteCard"} style={ !this.props.nightMode?{backgroundColor: this.state.color }:null}>
                        <h2 className="quote primaryTxt">
                            {this.state.quote.quoteText}
                        </h2>


                        <div className="author">

                            {(this.state.quote.quoteAuthor && <p className={this.props.nightMode?"primaryNightText": null}>Created by: </p>)}


                            <h3 className={this.props.nightMode?"authorName primaryNightText":"authorName"}>
                                {this.state.quote.quoteAuthor}
                            </h3>
                        </div>

                        <button className="quoteButton" onClick={this.handleClick}>New Quote</button>

                    </div>

                </div>

            </>
        )
    }
}


const mapStateToProps = ({port}) => {
    return {
        nightMode: port.nightMode,
    }
}

export default connect(mapStateToProps,null)(Project3)