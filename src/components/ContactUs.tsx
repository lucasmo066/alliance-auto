"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Image from "next/image";

const ContactUs = () => {
  const { handleSubmit, control, formState } = useForm();

  const onSubmit = (data) => {
    // Handle the form submission here
    console.log(data);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold text-center mb-4">Contact Us</h2>
      <div className="border border-red-500 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="border lg:col-1/2">
          <div className="p-4 mx-auto lg:mx-0">
            <Image
              src="/carLot.jpeg"
              width={800}
              height={500}
              alt="Car Lot at Alliance Group Autobrokers"
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-1/2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-4">
              <label className="text-lg">Name</label>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input {...field} className="form-input" />
                )}
              />
              {formState.errors.name && (
                <p className="text-red-600">Name is required</p>
              )}
            </div>
            <div className="form-group mb-4">
              <label className="text-lg">Phone</label>
              <Controller
                name="phone"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input {...field} className="form-input" />
                )}
              />
              {formState.errors.phone && (
                <p className="text-red-600">Phone is required</p>
              )}
            </div>
            <div className="form-group mb-4">
              <label className="text-lg">Email</label>
              <Controller
                name="email"
                control={control}
                rules={{ required: true, pattern: /^\S+@\S+$/i }}
                render={({ field }) => (
                  <input {...field} className="form-input" />
                )}
              />
              {formState.errors.email && (
                <p className="text-red-600">Enter a valid email</p>
              )}
            </div>
            <div className="form-group mb-4">
              <label className="text-lg">Message</label>
              <Controller
                name="message"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <textarea {...field} className="form-textarea" />
                )}
              />
              {formState.errors.message && (
                <p className="text-red-600">Message is required</p>
              )}
            </div>
            <div className="form-group mb-4">
              <label className="text-lg">What are you looking for?</label>
              <Controller
                name="interest"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <select {...field} className="form-select">
                    <option value="">Select an option</option>
                    <option value="trade-in">Trade In</option>
                    <option value="buy-car">Buy a Car</option>
                    <option value="test-drive">Test Drive</option>
                    {/* Add more options as needed */}
                  </select>
                )}
              />
              {formState.errors.interest && (
                <p className="text-red-600">Select an option</p>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
