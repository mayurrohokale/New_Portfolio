import axios from "axios";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Backend_Url = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
const SITE_KEY = import.meta.env.VITE_SECRET_KEY;

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

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

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");
    setLoading(true);

    if (!captchaToken) {
      setErrorMessage("Please complete the CAPTCHA.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${Backend_Url}/contact`, {
        ...formData,
        recaptchaToken: captchaToken,
      });
      console.log(response);
      setSuccessMessage(response?.data?.message||"Message sent successfully!");
      setFormData({ name: "", email: "", message: "", subject: "General Inquiry" });
    } catch (err) {
      setErrorMessage(err?.response?.data?.message || "Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center mt-4 py-8 px-1 md:px-8 lg:px-16 font-poppins" id="contact">
      <h1 className="text-3xl font-bold  text-center">Get in Touch</h1>
      <form
        className=" p-2 md:p-8 w-full max-w-2xl"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label className="font-medium">Subject</label>
          <select
            name="subject"
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option>General Inquiry</option>
            <option>Job Proposal</option>
            <option>Feedback</option>
            <option>Technical Support</option>
            <option>Collaboration</option>
          </select>
        </div>
        <div className="flex flex-col mt-4">
          <label className="font-medium">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-4 flex justify-center">
          <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptchaChange} />
        </div>
        <div className="flex justify-center">
        <button
          className={`w-[200px]  md:w-[230px] mt-6 p-3 text-md md:text-lg font-bold rounded-lg transition duration-300
            ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"}`}
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        </div>
        {successMessage && (
          <div className="text-green-600 text-center font-semibold p-2 bg-green-100 border border-green-400 rounded-md mt-4">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="text-red-600 text-center font-semibold p-2 bg-red-100 border border-red-400 rounded-md mt-4">
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}