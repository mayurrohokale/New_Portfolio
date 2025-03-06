import axios from "axios";
import { useState } from "react";

const Backend_Url = import.meta.env.VITE_BACKEND_URL;
export default function Contact() {
  const [successMessage, SetSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetSuccessMessage("");
    setErrorMessage("");
    setLoading(true);
    try {
      const response = await axios.post(
        `${Backend_Url}/contact`,
        formData
      );

      console.log(response.data);
      SetSuccessMessage("Message sent successfully");
    } catch (err) {
      console.log(err);
      setErrorMessage(err);
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
            <h1 className="text-green-400 text-lg">{successMessage}</h1>
            <h1 className="text-red-400 text-lg">{errorMessage}</h1>
          </div>
        </form>
      </div>
    </div>
  );
}
