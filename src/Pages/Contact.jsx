import axios from "axios";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Backend_Url = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
const SITE_KEY = import.meta.env.VITE_SECRET_KEY;
export default function Contact() {
  const [successMessage, SetSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
//   const [status, setStatus] = useState();

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
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    SetSuccessMessage("");
    setErrorMessage("");
    setLoading(true);

    if(!captchaToken){
        setErrorMessage("Please Enter Captcha");
        return;
    }

    try {
      const response = await axios.post(
        `${Backend_Url}/contact`,{
        ...formData,
        recaptchaToken: captchaToken
    });

      console.log(response.data);
      SetSuccessMessage("Message sent successfully");
    } catch (err) {
      console.log(err);
      setErrorMessage(err?.response?.data?.message || "something went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="w-full py-4  font-poppins">
      <h1 className="flex justify-center font-bold text-2xl">Get in Touch</h1>
      <div className="flex justify-center ">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border w-[300px]  md:w-[550px] p-2 rounded-md"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border w-[300px]  md:w-[550px]  p-2 rounded-md"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Subject:</label>
          <select
            name="subject"
            className="border rounded-md h-12"
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
          <label>Message:</label>
          <textarea
            name="message"
            placeholder="Your Message"
            className="border h-24 w-[300px]  md:w-[550px]  p-2 rounded-md"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptchaChange} />
          <button
            className={`font-bold w-[150px] md:w-[200px] p-3 text-md md:text-lg rounded-lg
                ${
                  loading
                    ? "bg-gray-400 text-black cursor-not-allowed"
                    : "bg-blue-500 text-white cursor-pointer"
                }  `}
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          <div>
          {successMessage && (
            <div className="text-green-500 text-md md:text-lg font-semibold p-2 bg-green-100 border border-green-400 rounded-md mt-2">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="text-red-500 text-md md:text-lg font-semibold p-2 bg-red-100 border border-red-400 rounded-md mt-2">
              {errorMessage}
            </div>
          )}

          </div>
        </form>
      </div>
    </div>
  );
}
