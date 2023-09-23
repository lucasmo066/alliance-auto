'use client'
import React from 'react';

interface CarfaxButtonProps {
  vin: string;
}

const CarfaxButton: React.FC<CarfaxButtonProps> = ({ vin }) => {
  return (
    <a
      href={`https://www.carfax.com/vehicle-history-reports/?vin=${vin}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="btn btn-outline text-secondary hover:bg-blue-300 mx-2">Carfax</button>
    </a>
  );
};

export default CarfaxButton;