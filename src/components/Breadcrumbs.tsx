'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface BreadcrumbProps {
  crumbs: { label: string; href: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ crumbs }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Delay the animation by 2 seconds
    const delay = setTimeout(() => {
      setShouldAnimate(true);
    }, 1000);

    // Clear the delay timeout if the component unmounts
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="text-sm text-secondary mx-5 breadcrumbs">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <AnimatePresence>
          {shouldAnimate &&
            crumbs.map((crumb, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.5 }} // Adjust animation duration here
              >
                {crumb.href ? (
                  <Link href={crumb.href}>
                    <p>{crumb.label}</p>
                  </Link>
                ) : (
                  crumb.label
                )}
              </motion.li>
            ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default Breadcrumb;
