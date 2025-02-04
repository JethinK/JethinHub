const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg text-gray-300 text-center max-w-2xl mb-6">
        Feel free to reach out for collaborations, opportunities, or just to say
        hi!
      </p>
      <form className="space-y-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 rounded-lg bg-gray-800 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 rounded-lg bg-gray-800 text-white"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 rounded-lg bg-gray-800 text-white"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
