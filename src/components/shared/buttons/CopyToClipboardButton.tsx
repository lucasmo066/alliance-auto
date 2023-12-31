"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface CopyToClipboardButtonProps {}

const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const currentURL = window.location.href;

    // Create a temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = currentURL;
    document.body.appendChild(tempInput);

    // Select the input element and copy the text to the clipboard
    tempInput.select();
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Set copied state to true
    setCopied(true);

    // Reset copied state after a few seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="btn btn-outline text-secondary hover:bg-blue-400 font-bold py-2 px-4 rounded-half"
      onClick={handleCopyClick}
    >
      {copied ? "Link Copied to Clipboard" : "Share"}
    </motion.button>
  );
};

export default CopyToClipboardButton;
