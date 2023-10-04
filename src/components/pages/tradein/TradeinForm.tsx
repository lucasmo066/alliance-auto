"use client";

import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";

export default function CarInfoForm() {
  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
    reset,
  } = useForm();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmit = (data) => {
    // Handle form submission here (you can make an API call or any other action)
    console.log(data);
    // Assuming the submission was successful, show the success message
    setShowSuccessMessage(true);

    // Clear the form
    reset();
  };

  const handleFileUpload = useCallback((acceptedFiles) => {
    // Do something with the uploaded files
    console.log(acceptedFiles);
  }, []);

  return (
    <div className="bg-neutral bg-opacity-80 shadow-lg rounded py-10 px-20 mt-10 space-y-4">
      <p className="text-accent text-sm">
        All fields are required for submission unless otherwise noted.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col space-y-1">
          <label className="text-secondary" htmlFor="customerName">
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            {...register("customerName", { required: true })}
            className="border rounded-md bg-gray-700 text-white p-2"
          />
          {errors.customerName && (
            <span className="text-accent">This field is required</span>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-secondary" htmlFor="vehicleInterest">
            Vehicle of Interest
          </label>
          <input
            type="text"
            id="vehicleInterest"
            {...register("vehicleInterest", { required: true })}
            className="border rounded-md bg-gray-700 text-white p-2"
          />
          {errors.vehicleInterest && (
            <span className="text-accent">This field is required</span>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-secondary" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            {...register("phoneNumber", {
              required: true,
              pattern: /^\d{10}$/,
            })}
            className="border rounded-md bg-gray-700 text-white p-2"
          />
          {errors.phoneNumber && (
            <span className="text-accent">
              Enter a valid 10-digit phone number
            </span>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-secondary" htmlFor="vehicleYear">
            Vehicle Year
          </label>
          <input
            type="text"
            id="vehicleYear"
            {...register("vehicleYear", {
              required: true,
              pattern: /^\d{4}$/,
            })}
            className="border rounded-md bg-gray-700 text-white p-2"
          />
          {errors.vehicleYear && (
            <span className="text-accent">Enter a valid year</span>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-secondary" htmlFor="vehicleMake">
            Vehicle Make
          </label>
          <input
            type="text"
            id="vehicleMake"
            {...register("vehicleMake", { required: true })}
            className="border rounded-md bg-gray-700 text-white p-2"
          />
          {errors.vehicleMake && (
            <span className="text-accent">This field is required</span>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-secondary" htmlFor="vehicleModel">
            Vehicle Model
          </label>
          <input
            type="text"
            id="vehicleModel"
            {...register("vehicleModel", { required: true })}
            className="border rounded-md bg-gray-700 text-white p-2"
          />
          {errors.vehicleModel && (
            <span className="text-accent">This field is required</span>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-secondary" htmlFor="vin">
            VIN (Vehicle Identification Number)
          </label>
          <input
            type="text"
            id="vin"
            {...register("vin", { required: true, minLength: 17 })}
            className="border rounded-md bg-gray-700 text-white p-2"
          />
          {errors.vin && (
            <span className="text-accent">
              Enter a valid VIN (17 characters)
            </span>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-secondary" htmlFor="odometerReading">
            Current Odometer Reading
          </label>
          <input
            type="text"
            id="odometerReading"
            {...register("odometerReading", {
              required: true,
              pattern: /^\d+$/,
            })}
            className="border rounded-md bg-gray-700 text-white p-2"
          />
          {errors.odometerReading && (
            <span className="text-accent">Enter a valid number</span>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-secondary" htmlFor="titleStatus">
            Title Status
          </label>
          <div>
            <label htmlFor="titleStatusClean" className="label">
              Clean
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="titleStatusSalvage"
              {...register("titleStatus", { required: true })}
              value="salvage"
              className="radio"
            />
            <label htmlFor="titleStatusSalvage" className="label">
              Salvage
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="titleStatusJunk"
              {...register("titleStatus", { required: true })}
              value="junk"
              className="radio"
            />
            <label htmlFor="titleStatusJunk" className="label">
              Junk
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="titleStatusRebuilt"
              {...register("titleStatus", { required: true })}
              value="rebuilt"
              className="radio"
            />
            <label htmlFor="titleStatusRebuilt" className="label">
              Rebuilt
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="titleStatusFire"
              {...register("titleStatus", { required: true })}
              value="fire"
              className="radio"
            />
            <label htmlFor="titleStatusFire" className="label">
              Fire
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="titleStatusFlood"
              {...register("titleStatus", { required: true })}
              value="flood"
              className="radio"
            />
            <label htmlFor="titleStatusFlood" className="label">
              Flood
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="titleStatusHail"
              {...register("titleStatus", { required: true })}
              value="hail"
              className="radio"
            />
            <label htmlFor="titleStatusHail" className="label">
              Hail
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="titleStatusLemon"
              {...register("titleStatus", { required: true })}
              value="lemon"
              className="radio"
            />
            <label htmlFor="titleStatusLemon" className="label">
              Lemon
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="titleStatusUnsure"
              {...register("titleStatus", { required: true })}
              value="unsure"
              className="radio"
            />
            <label htmlFor="titleStatusUnsure" className="label">
              Unsure
            </label>
          </div>
          {errors.titleStatus && <span>Select a title status</span>}
        </div>

        <div className="flex flex-col space-y-1">
          <label className="label text-secondary" htmlFor="hasLineholder">
            Is there a lineholder on the title?
          </label>
          <select
            id="hasLineholder"
            {...register("hasLineholder")}
            className="select bg-gray-700 text-white rounded-md p-2"
          >
            <option className="text-white" value="no">
              No
            </option>
            <option className="text-white" value="yes">
              Yes
            </option>
          </select>
        </div>

        {watch("hasLineholder") === "yes" && (
          <div className="flex flex-col space-y-1">
            <label htmlFor="lineholderInfo" className="label text-secondary">
              List the lineholder and amount owed below
            </label>
            <input
              type="text"
              id="lineholderInfo"
              {...register("lineholderInfo")}
              className="input border bg-gray-700 text-white rounded-md p-2"
            />
          </div>
        )}

        <div className="flex flex-col space-y-1">
          <label htmlFor="knownIssues" className="label text-secondary">
            Please list any cosmetic or mechanically known issues
          </label>
          <input
            type="text"
            id="knownIssues"
            {...register("knownIssues", { required: true })}
            className="border rounded-md bg-gray-700 text-white p-2"
          />
          {errors.knownIssues && (
            <span className="text-accent">This field is required</span>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="additionalComments" className="text-secondary label">
            Additional Comments
          </label>
          <textarea
            id="additionalComments"
            {...register("additionalComments")}
            className="border rounded-md bg-gray-700 text-white p-2"
          />
        </div>

        {/* Dropzone for file upload */}
        <div className="flex flex-col space-y-1">
          <label className="label">Upload Images (Optional)</label>
          <div
            {...getRootProps()}
            className="border-dashed border-2 border-secondary p-4 rounded-md cursor-pointer"
          >
            <input {...getInputProps()} />
            <p className="text-secondary">
              Drag and drop some files here, or click to select files
            </p>
          </div>
          {acceptedFiles.length > 0 && (
            <div>
              <p>Uploaded Files:</p>
              <ul>
                {acceptedFiles.map((file) => (
                  <li key={file.path}>{file.path}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {showSuccessMessage && (
          <div className="alert alert-success mt-4">
            Form submitted successfully!
          </div>
        )}

        <button
          type="submit"
          className="button bg-primary hover:bg-blue-500 text-white py-3 px-10 rounded-lg w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
