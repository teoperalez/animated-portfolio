import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity:0,
    },
    animate: {
        x:0,
        opacity:1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0.3,
        y:10,
        transition: {
            duration:2,
            repeat:Infinity,
            repeatType: "mirror",
        },
    }
}

const sliderVariants = {
    initial: {
        x: 0,
   },
    animate: {
        x:"-1200%",
        transition: {
            duration: 60,
            repeatType:"loop",
            repeat:Infinity,
        }
    },
}



const Hero = () => {
    return (
        <div className="hero">
            <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate">
                Content Creator - Frontend Developer - Musician - Investor
            </motion.div>
            <div className="wrapper">

                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Teo Peralez</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer and UI designer</motion.h1>
                    <motion.div className="buttonContainer" variants={textVariants}>
                        <motion.a href="#Portfolio"variants={textVariants}>Latest Work</motion.a>
                        <motion.a href="#Contact"variants={textVariants}>Contact Me</motion.a>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" />
                </motion.div>



            </div>

            <div className="imageContainer">
                <img src="/hero.png" />
            </div>
        </div>
    )
}

export default Hero