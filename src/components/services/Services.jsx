import "./services.scss"
import { motion } from "framer-motion"

const Services = () => {
    return (
        <motion.div className="services">
            <motion.div className="textContainer">
                <motion.p>
                    From web UI to graphic design to Youtube videos<br />
                    I focus on making engaging, client-focused content for the web
                </motion.p>

            </motion.div>
            <motion.div className="titleContainer">
                <motion.div className="title">
                    <motion.img src="/people.webp" />
                    <motion.h1><b>Unique</b> Ideas</motion.h1>
                </motion.div>
                <motion.div className="title">
                    <motion.h1><b>For Your</b> Business.</motion.h1>
                    <motion.button>WHAT I DO</motion.button>

                </motion.div>

            </motion.div>
            <motion.div className="listContainer">
                <motion.div className="card">
                    <div className="cardTitle">Frontend Development</div>
                    <div className="cardDescription">From blogs to ecommerce to live animated overlays,
                        I utilize my knowledge of frontend frameworks VueJS and ReactJS
                        together with NodeJS to create stunning, reponsive, and intuitive web
                        tools to pull in clients and build your business! </div>
                    <div className="cardButton"><p>Learn More </p> <span>⇒</span></div>
                </motion.div>
                <motion.div className="card">
                    <div className="cardTitle">Content Creation</div>
                    <div className="cardDescription">Proven track record of gaining over 12,000 subscribers across 2 monetized Youtube Channels,
                        I can help you build your business into an online presence that not only
                        builds excitement and awareness around your brand, but also converts those
                        social media engagements into consistent advertising revenue, subscriptions, and product sales.
                    </div>
                    <div className="cardButton"><p>Learn More </p> <span>⇒</span></div>
                </motion.div>
                <motion.div className="card">
                    <div className="cardTitle">Video Editing</div>
                    <div className="cardDescription">Utilizing the Hollywood preferred DaVinci Resolve,
                        I can transform your ideas into videos that drive views and engagement,
                        convert viewers into subscribers and patrons, and lead to positive ROI 
                        on product placements and branded content.   
                    </div>
                    <div className="cardButton"><p>Learn More </p> <span>⇒</span></div>
                </motion.div>
                <motion.div className="card">
                    <div className="cardTitle">Graphic Design</div>
                    <div className="cardDescription">
                        From Youtube thumbnails to website hero images, let me 
                        add that extra layer of appeal to your business that will 
                        not only improve the appearance of your brand, but also build 
                        lasting impressions on your clients.   
                    </div>
                    <div className="cardButton"><p>Learn More </p> <span>⇒</span></div>
                </motion.div>


            </motion.div>

        </motion.div>
    )
}

export default Services