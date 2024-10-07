import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

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
        <div
            className="parallaxContainer"
            style={{
                background:
                    type === "services"
                        ? "linear-gradient(180deg, #111132, #0c0c1d"
                        : "linear-gradient(180deg, #111132, #505064"
            }}
            ref={ref}
        >
            <motion.h1 style={{ y: yText }}>
                {type === "services" ? "Services" : "Portfolio"}
            </motion.h1>
            <motion.div className="mountains"
            >

            </motion.div>
            {type === "services"
                ? <motion.div className="planets" style={{ y: yBg }}></motion.div>
                : <motion.div className="sun" style={{ y: yBg }}></motion.div>
            }
            <motion.div className="stars" style={{ x: yBg }}>

            </motion.div>

        </div>
    )
}

export default Parallax

