import React, { useState } from 'react';

function Contact() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State for form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // If no errors, process the form submission
      console.log('Form data:', formData);
      setIsSubmitted(true);

      // Optionally reset the form
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Show an alert or a confirmation message
      alert('Thank you! Your message has been sent.');

      // Clear submission status after some time (optional)
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="mt-20 bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="montserrat mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact</h2>
        <p className="montserrat mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Interested in working together? Fill out the form below and I will be in touch shortly! I can't wait to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="montserrat block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your name here"
              required
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="montserrat block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@example.com"
              required
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="montserrat block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Let me know how I can help you"
              required
            ></textarea>
            {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="montserrat py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send message
          </button>

          {isSubmitted && <p className="text-green-600 text-sm mt-4">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;

