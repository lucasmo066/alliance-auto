'use client';

import React from "react";

interface SetAppointmentButtonProps {
  href: string;
}

const SetAppointmentButton: React.FC<SetAppointmentButtonProps> = ({ href }) => {
  return (
    <a
      href={href}
      className="btn bg-purple-500 hover:bg-purple-900 text-white shadow-xl"
    >
      Set an Appointment
    </a>
  );
};

export default SetAppointmentButton;