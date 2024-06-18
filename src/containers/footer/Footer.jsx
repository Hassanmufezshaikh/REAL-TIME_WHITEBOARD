import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const footerLinks = [
  {
    title: "Links",
    links: [
      {
        name: "Git",
        link: "https://github.com/Hassanmufezshaikh",
      },

    ],
  },
];

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      {/* <h1 className="gradient__text">Do you want to step in to the future before others</h1> */}
    </div>

    {/* <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Real-Time Collaborative <br /> WhiteBoard</p>
      </div>

      <div className="gpt3__footer-links_div">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title}>
            <h4 className="pl-5 text-white">{footerLink.title}</h4>
            <ul className="">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`${
                    index !== footerLink.links.length - 1 ? 'mb-3' : 'mb-0'
                  } font-poppins font-normal text-dimWhite text-[22px] hover:text-secondary cursor-pointer text-white`}
                >
                  <a href={link.link} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
      
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Email</p>
        <p>+91 8296205418</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 WhiteBoard.</p>
    </div>
  </div>
);

export default Footer;
