import React from "react";
import TradeinForm from "~/components/pages/tradein/TradeinForm";

export default function TradeinPage() {
  return (
    <div className="flex min-h-screen flex-col items-center p-10 justify-between">
      <h2 className="text-5xl font-bold text-center text-accent">
        Trade-in Form
      </h2>
      <p className="text-secondary text-center m-5">
        Alliance Group Autobrokers accepts trade-ins at wholesale value only.
        Any trade-in value given is an estimate only until the vehicle is
        brought in-person and an inspection has been conducted.
      </p>
      <TradeinForm />
    </div>
  );
}
