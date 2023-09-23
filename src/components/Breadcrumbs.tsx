import React from "react";
import Link from "next/link";

interface BreadcrumbProps {
  crumbs: { label: string; href: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ crumbs }) => {
  return (
    <div className="text-sm text-secondary mx-5 breadcrumbs">
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        {crumbs.map((crumb, index) => (
          <li key={index}>
            {crumb.href ? (
              <Link href={crumb.href}>
                <p>{crumb.label}</p>
              </Link>
            ) : (
              crumb.label
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;