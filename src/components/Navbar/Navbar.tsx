import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link href="/cars">Cars</Link>
          </li>
        <li>
          <a>Why Us?</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Contact Us</a></li>
      </ul>
    </div>
    <a href="" className="btn btn-ghost normal-case text-xl text-accent">Alliance Group Autobrokers</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href="/cars">Cars</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Why Us?</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Contact Us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a  href="https://www.calendly.com/alliancegroupauto/carappt" className="btn btn-accent">Set an Appointment</a>
  </div>
</div>
  )
}

export default Navbar