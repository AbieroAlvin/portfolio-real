const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-5">
          Get in Touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255277.88558448784!2d36.720707694482996!3d-1.3462798112938135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f12096e1f870d%3A0x541f93cb531ad804!2sImara%20Daima%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1697918351014!5m2!1sen!2ske"
              width="600"
              height="450"
              className="border-0 w-full h-full"
              allowfullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form
              action="https://getform.io/f/4f9f47be-5ed4-4ba5-948b-b514d292cfdf"
              method="POST"
              encType="multipart/form-data"
              className="w-full"
            >
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-md"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-md"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-md"
                />
              </div>
              <div className="mb-5">
                <textarea
                  type="text"
                  rows={4}
                  placeholder="Write your message"
                  className="w-full p-3 focus:outline-none rounded-md"
                />
              </div>

              <button className="w-full p-3 focus:outline-none rounded-md bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
