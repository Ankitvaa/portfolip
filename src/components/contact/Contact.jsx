import { motion } from "framer-motion";
import "./contact.scss";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0,
    },
  },
};

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_6ptifys",
      "template_zinj9r7",
      form.current,
      "jQ-x_294N9H6qMIu_"
    )
    .then(
      (result) => {
        if (result.text === "OK") {
          setFormData({
            user_name: "",
            user_email: "",
            user_message: "",
          });
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 5000);
        }
      },
      (error) => {
        console.error("Failed to send email:", error); // Add this for better debugging
        setShowError(true);
        setTimeout(() => setShowError(false), 5000);
      }
    );
};


  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div className="item" variants={variants}>
          <motion.h2>Mail</motion.h2>
          <motion.span>yadavankit68072@gmail.com</motion.span>
        </motion.div>
        {/* <motion.div className="item" variants={variants}>
          <motion.h2>Address</motion.h2>
          <motion.span></motion.span>
        </motion.div> */}
        <motion.div className="item" variants={variants}>
          <motion.h2>Phone</motion.h2>
          <motion.span>91+ 9987266397</motion.span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity:0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <svg
            width="450px"
            height="450px"
            viewBox="0 0 32.666 32.666"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853"
              stroke="#1C274C"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
              stroke="#1C274C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M15.1007 15.0272L14.5569 14.5107L15.1007 15.0272ZM15.5562 14.5477L16.1 15.0642H16.1L15.5562 14.5477ZM17.9728 14.2123L17.5987 14.8623H17.5987L17.9728 14.2123ZM19.8833 15.312L19.5092 15.962L19.8833 15.312ZM20.4217 18.7584L20.9655 19.2749L20.4217 18.7584ZM19.0011 20.254L18.4573 19.7375L19.0011 20.254ZM17.6763 20.9631L17.7499 21.7095L17.6763 20.9631ZM7.81536 16.4752L8.35915 15.9587L7.81536 16.4752ZM3.00289 6.96594L2.25397 7.00613L2.25397 7.00613L3.00289 6.96594ZM9.47752 8.50311L10.0213 9.01963H10.0213L9.47752 8.50311ZM9.63424 5.6931L10.2466 5.26012L9.63424 5.6931ZM8.37326 3.90961L7.76086 4.3426V4.3426L8.37326 3.90961ZM5.26145 3.60864L5.80524 4.12516L5.26145 3.60864ZM3.69185 5.26114L3.14806 4.74462L3.14806 4.74462L3.69185 5.26114ZM11.0631 13.0559L11.6069 12.5394L11.0631 13.0559ZM15.6445 15.5437L16.1 15.0642L15.0124 14.0312L14.5569 14.5107L15.6445 15.5437ZM17.5987 14.8623L19.5092 15.962L20.2575 14.662L18.347 13.5623L17.5987 14.8623ZM19.8779 18.2419L18.4573 19.7375L19.5449 20.7705L20.9655 19.2749L19.8779 18.2419ZM17.6026 20.2167C16.1676 20.3584 12.4233 20.2375 8.35915 15.9587L7.27157 16.9917C11.7009 21.655 15.9261 21.8895 17.7499 21.7095L17.6026 20.2167ZM8.35915 15.9587C4.48303 11.8778 3.83285 8.43556 3.75181 6.92574L2.25397 7.00613C2.35322 8.85536 3.1384 12.6403 7.27157 16.9917L8.35915 15.9587ZM9.7345 9.32159L10.0213 9.01963L8.93372 7.9866L8.64691 8.28856L9.7345 9.32159ZM10.2466 5.26012L8.98565 3.47663L7.76086 4.3426L9.63424 5.6931L10.2466 5.26012ZM8.2935 3.93009L7.43864 4.4026L6.7081 5.61067L6.4718 5.70267L7.56044 4.93209L8.2935 3.93009ZM5.25934 3.60864L5.26145 3.60864L5.80524 4.12516L5.25934 3.60864ZM3.69185 5.26114L4.05115 4.75146L3.69185 5.26114Z"
              fill="#1C274C"
            />
          </svg>
        </motion.div>
        <motion.form ref={form} onSubmit={sendEmail}>
          <motion.input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <motion.input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <motion.textarea
            name="user_message"
            value={formData.user_message}
            onChange={handleChange}
            placeholder="Message"
            required
          />
          <motion.button type="submit">Send</motion.button>
        </motion.form>
        {showSuccess && (
          <div className="notification success">
            <p>Your message was sent successfully!</p>
          </div>
        )}
        {showError && (
          <div className="notification error">
            <p>Oops, something went wrong. Please try again.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
