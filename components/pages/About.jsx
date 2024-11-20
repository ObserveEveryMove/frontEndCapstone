import { useState } from "react"
import { connect } from "react-redux"

import Footer from "../nav/Footer";

const About = (props) => {

    const [rotate, setRotate] = useState({ x: 0, y: 0 })

    const onMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    const onMouseMove = (e) => {
        const card = e.currentTarget;
        const box = card.getBoundingClientRect();
        const x = e.clientX - box.left;
        const y = e.clientY - box.top;
        const centerX = box.width / 2;
        const centerY = box.height / 2;
        const rotateX = ((y - centerY) / -25);
        const rotateY = ((centerX - x) / -25);

        setRotate({ x: rotateX, y: rotateY });
    }


    return (
        <>
            <div className="aboutOuter">

                <div className="cardHolder1 animate__animated animate__bounceInRight animate__delay-1s">

                    <div className={!props.nightMode ? "infoCard secondaryBg limeBorder infoCard1" : "secondaryNightMode infoCard limeBorder infoCard1 primaryNightText"}>
                        <h1 className="primaryTxt">ObserveEveryMove</h1>
                        <h2>Welcome to my profile page.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae dolor est deserunt quas ex fugiat cum dignissimos voluptate voluptates nulla illum reiciendis quis eaque vitae, perspiciatis sit laborum in?</p>
                    </div>
                </div>



                <div className="animate__animated animate__fadeInDownBig animate__delay-1s">
                    <div
                        onMouseMove={onMouseMove}
                        onMouseLeave={onMouseLeave}
                        style={{
                            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
                            transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                        }}
                        className={!props.nightMode ? " mainCardHolder secondaryBg limeBorder" : "secondaryNightMode mainCardHolder limeBorder primaryNightText"}>

                        <h1 className="primaryTxt">Patrick Keller</h1>
                        <h2 >Welcome to my profile page.</h2>
                        <p>I have been working in front-end web development since June of 2023. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eius veniam dolorum quasi perspiciatis accusamus cumque amet. Asperiores repellendus molestiae, iure neque ullam commodi! Molestiae dicta aperiam inventore a qui in sequi hic maxime consequatur, vel pariatur odit asperiores non placeat nulla blanditiis natus perferendis, soluta dolor sit veritatis autem.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate dolore fuga commodi similique, molestiae reprehenderit nulla, cum dolor obcaecati odio facilis provident porro odit consequatur eum deleniti! Odio, incidunt? Eaque dolorum assumenda dolore ea possimus ipsam quisquam blanditiis consequuntur illum in aperiam quibusdam ullam hic minus ad, sed officiis!
                        </p>
                    </div>
                </div>



                <div className="cardHolder2 animate__animated animate__bounceInLeft ">

                    <div className={!props.nightMode ? "infoCard secondaryBg limeBorder infoCard2" : "secondaryNightMode infoCard limeBorder infoCard2 primaryNightText"}>

                        <h1 className="primaryTxt">ObserveEveryMove</h1>
                        <h2>Welcome to my profile page.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae dolor est deserunt quas ex fugiat cum dignissimos voluptate voluptates nulla illum reiciendis quis eaque vitae, perspiciatis sit laborum in?</p>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

const mapStateToProps = ({ port }) => {
    return {
        nightMode: port.nightMode,
    }
}

export default connect(mapStateToProps, null)(About)