import Footer from "../nav/Footer"
import { connect } from "react-redux"

import js from "../../assets/data/pictures/js1.png"
// import react1 from "../../assets/data/reactIcon1.png"
import react2 from "../../assets/data/pictures/reactIcon2.png"
import reduxIcon from "../../assets/data/pictures/redux1.png"
import sass from "../../assets/data/pictures/sass.png"
import boot1 from "../../assets/data/pictures/bootStrap1.png"
// import boot2 from "../../assets/data/bootStrap2.png"
import htmlIcon from "../../assets/data/pictures/html.png"
import mongo from "../../assets/data/pictures/mongoDb.png"
import css from "../../assets/data/pictures/css.png"
import jquery from "../../assets/data/pictures/jquery.png"

const Resume = (props) => {
  return (
    <>
      <div className="resumeOuter animate__animated animate__fadeIn">



      <div className="animate__animated animate__rotateIn  ">

      
            <div className={!props.nightMode ? "languageContOuter primaryBg limeBorder paperShadow" : "secondaryNightMode languageContOuter limeBorder paperShadow"}>

              <div className={!props.nightMode ? "languageContInner secondaryBg limeBorder paperShadow" : "primaryNightMode languageContInner limeBorder paperShadow"}>

                

                <div>
                  <img
                    alt="javaScript"
                    className="langIcon"
                    src={js}></img>

                  <img
                    alt="react"
                    className="langIcon"
                    src={react2}></img>

                  <img
                    alt="redux"
                    className="langIcon"
                    src={reduxIcon}></img>
                </div>

                <div>
                  <img
                    alt="bootStrap"
                    className="langIcon"
                    src={boot1}></img>

                  <img
                    alt="sass"
                    className="langIcon"
                    src={sass}></img>

                  <img
                    alt="css"
                    className="langIcon"
                    src={css}></img>
                </div>

                <div>
                  <img
                    alt="html"
                    className="langIcon"
                    src={htmlIcon}></img>

                  <img
                    alt="mongo"
                    className="langIcon"
                    src={mongo}></img>

                  <img
                    alt="jquery"
                    className="langIcon"
                    src={jquery}></img>
                </div>
                </div>
              </div>
          

          </div>


        <div className={!props.nightMode ? "resumeOuter" : "primaryNightText resumeOuter"}>
          <h1>Patrick Keller</h1>
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor temporibus possimus. Illo voluptas, sapiente, officia fugit consectetur odit corrupti a accusantium nemo, at magni est doloribus commodi soluta iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla cum, labore placeat odio culpa quasi reiciendis eos tempore alias id quas adipisci eligendi repellendus porro quae ullam nobis iusto saepe dolorem magnam cupiditate? Possimus nisi et voluptates. Magni totam, dolore, tenetur facere explicabo sed aspernatur voluptates error, delectus cupiditate accusantium alias debitis culpa facilis sunt dolorem eos animi? Expedita quasi non adipisci aliquid quos. Tempore beatae quibusdam sed velit magnam minima, nisi facilis numquam facere nobis placeat corporis, cupiditate ipsa iure dolorem, deserunt quisquam vero laudantium. Suscipit ducimus delectus quisquam! Obcaecati recusandae exercitationem, voluptatibus porro vel neque ullam quidem!</h2>

          <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque accusantium nemo voluptatem quasi facilis quae fuga rem reiciendis possimus, error fugit deleniti. Culpa dicta laborum delectus veniam iusto at voluptatum neque debitis, autem soluta eos earum! Voluptatibus molestiae similique, nulla amet accusamus iusto aspernatur earum saepe velit. Id dolorum fugit, nulla ex deleniti itaque doloribus exercitationem aspernatur temporibus labore distinctio necessitatibus ut provident sapiente perspiciatis ratione earum repellendus, maiores rem! Voluptatem itaque, commodi sapiente in eos adipisci repudiandae provident ad suscipit consectetur aliquam laudantium eaque. Maxime facere tempora dolor sapiente dolores praesentium nisi inventore blanditiis minima aliquam? Exercitationem, ratione minus!</h3>

     

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

export default connect(mapStateToProps, null)(Resume)