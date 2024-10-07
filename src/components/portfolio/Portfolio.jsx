import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

const portfolioItems = [
    {
        id: 1,
        title: "RBY Pokemon Challenges Live Overlay Standalone Application",
        img: "/portfolio/RBYPC_Overlay.png",
        description: "As featured on my Youtube channels with over 12,000 subscribers.  Using ElectronJS, NodeJS, and VueJS, I created a live overlay that directly reads game RAM from the Retroarch emulator to display Pokemon stats, moves, and battle summaries in real-time.   The overlay also automates the creation of tier-lists, generates Patreon and Channel Member acknowledgements, and automates tasks like local file management, scene transitions, and audio syncing.",
        link: "#"
    },
    {
        id: 2,
        title: "Warhammer 40k Army Builder WebApp",
        img: "/portfolio/40k_Army_Builder.png",
        description: "Using NextJS, Mongo DB, and Prisma, this app helps players make army lists in every edition of the Warhammer 40,000 tabletop game.   It also features the ability to download army lists locally in a readable format with summary sheets and rulesheets to share with friends, a battle simulator that let's players test results of units head-to-head with detailed statistics, and a mobile-friendly online dice roller for players on the go or using alborate tabletops where dice can't be used.",
        link: "#"
    },
    {
        id: 3,
        title: "Think. Trade/ Profit. Technical Indicator Blog & E-commerce",
        img: "/portfolio/Think_Trade_Profit.png",
        description: "Built on a MERN stack and ChartJS, this app provides detailed analysis of technical trading indicators dunamically by allowing users to set specific entry and exit rules and seee in real-time backtested results on their favorite stocks, cryptos, and forex pairs.  It also ranks technical indicators daily based on recent performance and trades generated on the SP500.   Users can add their favorite indicators to their profile, sign-up for paid subscriptions to get daily updates of technical signals based on their saved indicators, and purchase custome indicator scripts for use on their favrite trading platforms",
        link: "thinktradeprofit.com"
    },
    {
        id: 4,
        title: "Wedding Album App",
        img: "/portfolio/Wedding_App.png",
        description: "Built on NextJS and Framer Motion, this app allows couple to register their official wedding pictures in high definition and share them digitally to their friends and family.   After signing up for a free tier, users can save their pictures, set a background and color palette, and add a custom message.  If upgraded to a premium tier, they can upload more images, and make the images downloadable by friends and family in HD by either sharing on SNS or entering emails to automatically send download link.",
        link: "https://teoandyuriko.vercel.app/"
    },
]

const PortfolioItem = ({ portfolioItem }) => {
    const itemRef = useRef()

    const { scrollYProgress } = useScroll({ target: itemRef })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <section ref={itemRef}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src={portfolioItem.img} alt="portfolioItem.title" />
                    </div>
                    <motion.div className="textContainer" >
                        <h2>{portfolioItem.title}</h2>

                        <p>{portfolioItem.description}</p>
                        <a href={portfolioItem.link} target="_blank">See Demo</a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Work</h1>
                <motion.div className="progressBar" style={{ scaleX }}></motion.div>
            </div>
            {portfolioItems.map((item) =>
                <PortfolioItem key={item.id} portfolioItem={item} />

            )}

        </div>
    )
}

export default Portfolio