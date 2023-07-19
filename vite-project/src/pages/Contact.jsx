import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../styles/Contactme.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";



const Contact = () => {
  const [isError, setIsError] = useState(false);
  const [isGood, setIsGood] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsGood(false);
    setIsError(false);

    try {
      emailjs.sendForm('service_299uvml', 'template_ussa4mk', e.target, 'lCxhiZK6lZ76m16bS')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

      e.target.reset();
      setIsGood(true);
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <section id="contact-me">
      <div className="container">
        <div>
          <h1 className="heading">Contact Me</h1>
          <h3 className='email'>josebibby23@gmail.com</h3>
          <div className='socialContain'>
            <ul>
              <a href="https://www.linkedin.com/in/jose-cortorreal-909b78265/" target="_blank" rel="noopener noreferrer"><li><FaLinkedin className='contactIcons' /></li></a>
              <a href="https://github.com/josecortorreal" target="_blank" rel="noopener noreferrer"><li><FaGithub className='contactIcons' /></li></a>
            </ul>
          </div>

          <form onSubmit={sendEmail}>
            {/* <label>Name</label> */}
            <input className='input' placeholder="Enter Name" type="text" name="name" />
            {/* <label>Subject</label> */}
            <input className='input' placeholder="Enter Subject" type="text" name="subject" />
            {/* <label>Email</label> */}
            <input className='input' placeholder="Enter Email" type="email" name="email" />
            {/* <label>Message</label> */}
            <textarea className="mesg" placeholder="Enter Message" name="message" />
            <input type="submit" className="submit" value="Send" />
          </form>       
        </div>
      </div>
    </section>
  );
};

export default Contact;
