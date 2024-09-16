import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Movie Search App",
    img:
      "/movies.png",
    desc:
      "A dynamic web application that allows users to search for any kind of movie, offering a seamless and intuitive user experience. The app leverages a powerful search functionality to fetch movie details, including posters, ratings, and summaries, providing users with an engaging and informative way to explore films. The Movies App is designed with performance and scalability in mind, ensuring a smooth experience even with large data sets.",
      link:"https://ankittmovies.netlify.app/"
  },

  {
    id: 2,
    title: "KBC",
    img:
      "/kbc.webp",
    desc:
      "The KBC Data Fetching Application is a dynamic web tool designed to offer users an engaging experience related to the iconic TV show This application provides seamless access to a comprehensive dataset, featuring detailed information about the show’s questions, answers, and contestant data. Users can efficiently search and explore various aspects of the show, such as question categories, prize tiers, and contestant performances.",
      link:"https://ankitt-kbc.netlify.app/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer">
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button>Demo</button>
              </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();

  // Using useScroll to get scrollYProgress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  // Using useSpring to create spring animation for scrollYProgress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressbar"></motion.div>
      </div>

      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
