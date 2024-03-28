import React from 'react'

const Footer = () => {
  return (
    <footer className="footer mt-10 p-10 border-t border-gray-500 bg-black text-white max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
  <aside>
    <img className='h-12' src='m.png' alt='' />
    <p>SMA industries Ltd.<br/>Providing reliable info. since 1992</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  )
}

export default Footer