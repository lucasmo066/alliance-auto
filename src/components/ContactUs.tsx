'use client';

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  messageType: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors }, // Access errors from formState
    reset, // Reset function to clear the form
  } = useForm<FormData>({
    mode: "onBlur", // Validate on blur
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmit = (data: FormData) => {
    // Handle form submission here (you can make an API call or any other action)

    // Assuming the submission was successful, show the success message
    setShowSuccessMessage(true);

    // Clear the form
    reset();
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ease: "easeIn", duration: 0.5 }} // Add this transition for ease-in
    className="bg-neutral rounded shadow-xl my-10 py-5 px-10"
  >
    <div className="my-2 p-10">
      <div className="md:flex md:items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl text-center text-accent font-bold">Contact Us</h2>
          <p className="mt-2 mb-4 text-secondary md:mb-0 md:text-lg">
            Any questions? Please fill out the form below.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            {showSuccessMessage && (
              <div className="alert alert-success mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"

                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Your message has been sent!</span>
              </div>
            )}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                {...register('name', { required: true })}
                className={`mt-1 p-2 w-full rounded-md border-gray-300 ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-600">Name is required</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+$/i, // Email pattern
                })}
                className={`mt-1 p-2 w-full rounded-md border-gray-300 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-600">Enter a valid email</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-white">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                {...register('phone', {
                  required: true,
                  pattern: /^\d{10}$/i, // Phone number pattern (10 digits)
                })}
                className={`mt-1 p-2 w-full rounded-md border-gray-300 ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
              {errors.phone && (
                <p className="text-red-600">Enter a valid phone number (10 digits)</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="messageType" className="block text-sm font-medium text-white">
                What are you interested in?
              </label>
              <Controller
                name="messageType"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <select
                    {...field}
                    className={`select select-bordered w-full max-w-xs mt-1 ${
                      errors.messageType ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">Select an option</option>
                    <option value="Trade-Ins">Trade-Ins</option>
                    <option value="Interest in Car">Interest in Car</option>
                    <option value="Test Drive">Test Drive</option>
                    <option value="Other">Other</option>
                  </select>
                )}
              />
              {errors.messageType && (
                <p className="text-red-600">Select an option</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                {...register('message', { required: true })}
                className={`mt-1 p-2 w-full rounded-md border-gray-300 ${
                  errors.message ? "border-red-500" : ""
                }`}
              />
              {errors.message && (
                <p className="text-red-600">Message is required</p>
              )}
            </div>
            <div className="mt-4 text-center">
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default ContactUs;
