import React from 'react';


export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-3xl font-bold text-secondary">Grabbing car from garage...</div>
        <span className="loading loading-dots loading-lg text-accent"></span>
        </div>
    );
    }