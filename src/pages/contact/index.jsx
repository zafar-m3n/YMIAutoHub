import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="bg-white dark:bg-dark text-black dark:text-white">
      <Navbar theme={theme} setTheme={setTheme} />

      <section className="contact-section py-12" id="contact">
        <div className="container mx-auto px-4">
          <div className="contact-content text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg mb-8">
              We would love to hear from you. Please feel free to reach out to
              us with any queries or feedback.
            </p>
            <form method="POST" className="max-w-2xl mx-auto">
              <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label
                    htmlFor="name"
                    className="block text-lg font-semibold mb-2 text-left"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="email"
                    className="block text-lg font-semibold mb-2 text-left"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="form-group mt-6">
                <label
                  htmlFor="subject"
                  className="block text-lg font-semibold mb-2 text-left"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="form-group mt-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold mb-2 text-left"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center text-center md:text-left">
              <p className="text-lg mb-8">
                We are located in the heart of Kalubowila, Sri Lanka. Feel free
                to drop by for a chat.
              </p>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1863727601954!2d79.87055667451862!3d6.868257593130406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bea91347859%3A0x9ec64df5bf9405fe!2s34%20De%20Silva%20Cross%20Rd%2C%20Dehiwala-Mount%20Lavinia%2010350!5e0!3m2!1sen!2slk!4v1732784433867!5m2!1sen!2slk"
                className="w-full h-64 border-none rounded-2xl shadow-lg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
