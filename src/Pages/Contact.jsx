import axios from "axios";
import { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha"; // Commented out - Uncomment when you want to use it
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../assets/varients";
import { HiMail, HiUser, HiPencilAlt } from "react-icons/hi";
import { IoSend } from "react-icons/io5";
import { MdSubject } from "react-icons/md";

const Backend_Url = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
const SITE_KEY = import.meta.env.VITE_SECRET_KEY;

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  // const [captchaToken, setCaptchaToken] = useState(null); // Uncomment when using reCAPTCHA
  const [focusedField, setFocusedField] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "General Inquiry",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Uncomment when using reCAPTCHA
  // const handleCaptchaChange = (token) => {
  //   setCaptchaToken(token);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");
    setLoading(true);

    // Uncomment when you want to use reCAPTCHA
    // if (!captchaToken) {
    //   setErrorMessage("Please complete the CAPTCHA.");
    //   setLoading(false);
    //   return;
    // }

    try {
      const response = await axios.post(`${Backend_Url}/contact`, {
        ...formData,
        // recaptchaToken: captchaToken, // Uncomment when using reCAPTCHA
      });
      console.log(response);
      setSuccessMessage(
        response?.data?.message || "Message sent successfully!"
      );
      setFormData({
        name: "",
        email: "",
        message: "",
        subject: "General Inquiry",
      });
    } catch (err) {
      setErrorMessage(err?.response?.data?.message || "Something went wrong.");
    }
    setLoading(false);
  };

  const subjects = [
    { value: "General Inquiry", icon: "💬" },
    { value: "Job Proposal", icon: "💼" },
    { value: "Feedback", icon: "⭐" },
    { value: "Technical Support", icon: "🔧" },
    { value: "Collaboration", icon: "🤝" },
  ];

  return (
    <div
      className="relative min-h-screen flex flex-col items-center py-20 px-4 md:px-8 lg:px-16 font-poppins overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white"
      id="contact"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1.5s" }}></div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-blue-300 rotate-45 opacity-10"
        animate={{
          rotate: [45, 225, 45],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-purple-300 rounded-full opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Header Section */}
      <div className="relative max-w-4xl w-full mb-8 md:mb-12 text-center px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent inline-block relative mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Get in Touch
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-gray-600 mt-4 md:mt-6 text-base md:text-lg max-w-2xl mx-auto px-4"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
        >
          Have a question or want to work together? Drop me a message!
        </motion.p>

        {/* Decorative email icon */}
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-4xl">📧</div>
        </motion.div>
      </div>

      {/* Form Container */}
      <motion.div
        className="relative w-full max-w-3xl px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-100 hover:border-blue-200 transition-all duration-500">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 border-t-4 border-l-4 border-blue-500 rounded-tl-2xl md:rounded-tl-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 border-b-4 border-r-4 border-blue-500 rounded-br-2xl md:rounded-br-3xl opacity-30"></div>

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <form className="relative z-10" onSubmit={handleSubmit}>
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              {/* Name Field */}
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false }}
              >
                <label className="flex items-center gap-2 font-semibold text-gray-700 mb-2 text-sm md:text-base">
                  <HiUser className="text-blue-500 text-lg md:text-xl" />
                  Name
                </label>
                <div className="relative group">
                  <motion.input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full border-2 border-gray-200 p-2.5 md:p-3 pl-3 md:pl-4 rounded-lg md:rounded-xl text-sm md:text-base focus:outline-none focus:border-blue-500 focus:ring-2 md:focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                  {/* Animated border */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === "name" ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>

              {/* Email Field */}
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false }}
              >
                <label className="flex items-center gap-2 font-semibold text-gray-700 mb-2 text-sm md:text-base">
                  <HiMail className="text-blue-500 text-lg md:text-xl" />
                  Email
                </label>
                <div className="relative group">
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full border-2 border-gray-200 p-2.5 md:p-3 pl-3 md:pl-4 rounded-lg md:rounded-xl text-sm md:text-base focus:outline-none focus:border-blue-500 focus:ring-2 md:focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === "email" ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Subject Field */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
              className="mb-4 md:mb-6"
            >
              <label className="flex items-center gap-2 font-semibold text-gray-700 mb-2 text-sm md:text-base">
                <MdSubject className="text-blue-500 text-lg md:text-xl" />
                Subject
              </label>
              <div className="relative">
                <motion.select
                  name="subject"
                  className="w-full border-2 border-gray-200 p-2.5 md:p-3 pl-3 md:pl-4 rounded-lg md:rounded-xl text-sm md:text-base focus:outline-none focus:border-blue-500 focus:ring-2 md:focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  required
                  whileFocus={{ scale: 1.02 }}
                >
                  {subjects.map((subject) => (
                    <option key={subject.value} value={subject.value}>
                      {subject.icon} {subject.value}
                    </option>
                  ))}
                </motion.select>
                {/* Custom dropdown arrow */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                  ▼
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ width: 0 }}
                  animate={{ width: focusedField === "subject" ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Message Field */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
              className="mb-4 md:mb-6"
            >
              <label className="flex items-center gap-2 font-semibold text-gray-700 mb-2 text-sm md:text-base">
                <HiPencilAlt className="text-blue-500 text-lg md:text-xl" />
                Message
              </label>
              <div className="relative">
                <motion.textarea
                  name="message"
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full border-2 border-gray-200 p-2.5 md:p-3 pl-3 md:pl-4 rounded-lg md:rounded-xl text-sm md:text-base focus:outline-none focus:border-blue-500 focus:ring-2 md:focus:ring-4 focus:ring-blue-100 transition-all duration-300 h-32 sm:h-40 resize-none bg-gray-50 focus:bg-white"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ width: 0 }}
                  animate={{ width: focusedField === "message" ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Character count */}
                <div className="absolute bottom-2 md:bottom-3 right-2 md:right-3 text-xs text-gray-400">
                  {formData.message.length}
                </div>
              </div>
            </motion.div>

            {/* reCAPTCHA - Commented out for later use */}
            {/* Uncomment below when you want to use reCAPTCHA */}
            {/* <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
              className="flex justify-center mb-6"
            >
              <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptchaChange} />
            </motion.div> */}

            {/* Submit Button */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
              className="flex justify-center"
            >
              <motion.button
                className={`relative px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg transition-all duration-300 overflow-hidden group min-w-[180px] sm:min-w-[200px] md:min-w-[250px]
                  ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white cursor-pointer"
                  }`}
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: loading ? 1 : 0.95 }}
              >
                {/* Animated background */}
                {!loading && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {loading ? (
                    <>
                      <motion.div
                        className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span className="hidden sm:inline">Sending...</span>
                      <span className="sm:hidden">Sending</span>
                    </>
                  ) : (
                    <>
                      <span className="hidden sm:inline">Send Message</span>
                      <span className="sm:hidden">Send</span>
                      <IoSend className="text-lg sm:text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </span>

                {/* Shine effect */}
                {!loading && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </motion.button>
            </motion.div>

            {/* Success Message */}
            {successMessage && (
              <motion.div
                className="mt-4 md:mt-6 text-green-700 text-center font-semibold p-3 md:p-4 text-sm md:text-base bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-400 rounded-xl md:rounded-2xl shadow-lg relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-100 to-transparent opacity-50"
                  animate={{ x: ["0%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <div className="relative z-10 flex items-center justify-center gap-2">
                  <span className="text-2xl">✓</span>
                  {successMessage}
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <motion.div
                className="mt-4 md:mt-6 text-red-700 text-center font-semibold p-3 md:p-4 text-sm md:text-base bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-400 rounded-xl md:rounded-2xl shadow-lg relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-100 to-transparent opacity-50"
                  animate={{ x: ["0%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <div className="relative z-10 flex items-center justify-center gap-2">
                  <span className="text-2xl">⚠</span>
                  {errorMessage}
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </motion.div>

      {/* Bottom decoration */}
      <motion.div
        className="mt-8 md:mt-12 text-center text-gray-500 text-xs sm:text-sm px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="inline-block"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          ⚡
        </motion.div>
        <p>I'll get back to you as soon as possible!</p>
      </motion.div>
    </div>
  );
}