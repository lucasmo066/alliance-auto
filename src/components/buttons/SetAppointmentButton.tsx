'use client';

import React from "react";

interface SetAppointmentButtonProps {
  href: string;
}

const SetAppointmentButton: React.FC<SetAppointmentButtonProps> = ({ href }) => {
  return (
    <a
      href={href}
      className="btn bg-blue-700 hover:bg-blue-500 text-white shadow-xl"
    >
      Set an Appointment
    </a>
  );
};

export default SetAppointmentButton;