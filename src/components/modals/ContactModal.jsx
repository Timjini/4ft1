import React, { useState } from "react";
import MainButton from "../common/MainButton";
import PhoneInput from "../common/PhoneInput";
import LoadingButton from "../common/LoadingButton";

const FormModal = ({ isOpen, toggleModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle phone input changes
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  // Handle input changes for other fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);
    setLoading(true);
    sleep(1000) 
    try {
      const response = await fetch("https://your-endpoint.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("-======? ", response)
      if (!response.ok) {
        throw new Error("Failed to send the form. Please try again later.");
      }

      setSuccess(true);
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Modal */}
      {isOpen && (
        <div className="modal fixed inset-0 flex items-center justify-center z-99">
          <div
            className="absolute inset-0 bg-gray-800 bg-opacity-75"
            onClick={toggleModal}
          ></div>

          <div className="relative bg-white rounded-2xl shadow-lg w-11/12 max-w-lg p-8 z-10">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">
              Contact Us
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-left text-gray-500 text-sm"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="mt-1 w-full p-3 pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-left text-gray-500 text-sm"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="mt-1 w-full p-3 pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
                  required
                />
              </div>

              <PhoneInput onChange={handlePhoneChange} />

              <div>
                <label
                  htmlFor="message"
                  className="block text-left text-gray-500 text-sm"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}

              {success && (
                <div className="text-green-500 text-sm text-center">
                  Your message was sent successfully!
                </div>
              )}

              <div className="flex justify-center">
                {loading ? (
                  <LoadingButton
                    title={isSubmitting ? "Sending..." : "Send"}
                    disabled={isSubmitting}
                  />
                ) : (
                  <MainButton
                    title={isSubmitting ? "Sending..." : "Send"}
                    disabled={isSubmitting}
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormModal;
