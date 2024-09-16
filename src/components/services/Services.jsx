import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./services.scss";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I am passionate about building innovative and scalable software
          solutions
          <br />
          that help businesses thrive in the digital world.
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Expertise</motion.b> in
            Full Stack Development
          </h1>
        </div>

        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Innovative</motion.b>{" "}
            Solutions for Your Business.
          </h1>
          <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
            <button>LEARN MORE</button>
          </a>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          // whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>About Me</h2>
          <p>
            I am a dedicated Software Developer with 2 years of hands-on
            experience, specializing in full-stack web development. I focus on
            creating high-quality, scalable applications that provide intuitive
            and seamless user experiences. With a solid foundation in Computer
            Science Engineering, I am well-versed in software development
            principles, best practices, and the latest technologies.
          </p>
          <p>
            Throughout my career, I've developed a strong proficiency in
            front-end technologies like React, HTML, CSS, and JavaScript, as
            well as back-end technologies including Node.js, Express.js, and
            MongoDB. I am passionate about building efficient, secure, and
            scalable applications, from designing responsive user interfaces to
            implementing robust server-side logic.
          </p>
          <p>
            I thrive in collaborative environments, continuously seeking
            opportunities to learn and grow. I'm committed to staying updated
            with emerging technologies and delivering impactful solutions to
            drive business success. If you're looking for someone who can bring
            innovative ideas and deliver robust web applications, let’s connect!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
