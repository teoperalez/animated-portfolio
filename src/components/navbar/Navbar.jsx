import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
    return(
        <div className="navbar"> 
           <Sidebar />
            <div className="wrapper">
                <motion.span 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.5}}
                >
                    <img src="/logo.webp" />
                </motion.span>
                <div className="social">
                    <a target="_blank" href="#"><img src="/youtube.png" alt="youtube"/></a>
                </div>
            </div>
        </div>
    )

} 

export default Navbar