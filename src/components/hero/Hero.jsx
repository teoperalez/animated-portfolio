import "./hero.scss"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <div className="textContainer">
                    <h2>Teo Peralez</h2>
                    <h1>Web Developer and UI designer</h1>
                    <div className="buttonContainer">
                        <button>Latest Work</button>
                        <button>Contact Me</button>
                    </div>
                    <img src="/scroll.png" />
                </div>
                <div className="imageContainer">
                    <img src="/hero.png" />
                </div>
                <div className="slidingText">
                    Content Creator - Frontend Developer - Musician - Investor 
                </div>
            </div>
        </div>
    )
}

export default Hero