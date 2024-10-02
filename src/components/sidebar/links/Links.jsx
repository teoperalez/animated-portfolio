import { delay, motion } from "framer-motion"

const variants = {
    open: {
        transition: {
            staggerChildren:0.1,
        }
    },
    closed: {
        transition: {
            staggerChildren:0.05,
            staggerDirection: -1,
        }
    }

}

const linkVariants = {
    open: {
        y:0,
        opacity:1,
        delay:0.2,
    },
    closed: {
        y:50,
        opacity:0,
    }

}

const Links = () => {

    const links = [
        "Home",
        "Services",
        "Portfolio",
        "Contact",

    ]
    return(
        <motion.div 
        className="links"
        variants={variants}
        >        
            {links.map((link) => (
                <motion.a href={`#${link}`} key={link} variants={linkVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{link}</motion.a>
            ))}
        </motion.div>
          
    )

} 

export default Links