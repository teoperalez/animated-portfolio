import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const variants= {
    initial: {
        opacity:0,
        y:-100,
        scale: 1.1

    },
    animate: {
        opacity:1,
        y:0,
        scale: 1,
        transition: {
            duration:1,
            staggerChildren: 0.1
        }

    },
    

}

const sliderVariants = {
    initial: {
        y: "0%",
        scale:1
   },
    animate: {
        y:"10%",
        scale: 1.1,
        transition: {
            duration: 10,
            repeatType:"reverse",
            repeat:Infinity,
        }
    },
}

const Parallax = ({ type }) => {

    
    
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const yText = useTransform(
        scrollYProgress,
        [0, 1],
        ["-20%", "200%"]
    )

    const yBg = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "150%"]
    )


    return (
        <motion.div
            className="parallaxContainer"
            style={{
                background:
                    type === "services"
                        ? "linear-gradient(180deg, #111132, #0c0c1d"
                        : "linear-gradient(180deg, #111132, #505064"
            }}
            ref={ref}
            variants={variants} initial="initial" whileInView="animate"
        >
            <motion.h1 style={{ y: yText }} variants={variants}>
                {type === "services" ? "Services" : "Portfolio"}
            </motion.h1>
            <motion.div className="mountains" variants={variants}
            >

            </motion.div>
            {type === "services"
                ? <motion.div className="planets" style={{ y: yBg }} variants={variants}></motion.div>
                : <motion.div className="sun" style={{ y: yBg }} variants={variants}></motion.div>
            }
            <motion.div className="stars" style={{ x: yBg }} variants={sliderVariants} initial="initial" animate="animate">

            </motion.div>

        </motion.div>
    )
}

export default Parallax

