export default function Contact() {
  return (
    <div className="w-full py-4  font-poppins">
        <h1 className="flex justify-center font-bold text-2xl">Get in Touch</h1>
      <div className="flex justify-center ">    
        <div className="flex flex-col gap-2">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border w-[300px]  md:w-[550px] p-2 rounded-md"
            required
          />
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border w-[300px]  md:w-[550px]  p-2 rounded-md"
            required
          />
          <label>Subject:</label>
          <select className="border rounded-md h-12"
          required>
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
            required
          />
          <button className="font-bold bg-blue-500 w-[150px] md:w-[200px] p-3 text-md md:text-lg rounded-lg text-white ">Send Message</button>
        </div>
      </div>
    </div>
  );
}
