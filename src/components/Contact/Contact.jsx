import React from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

function Contact() {

  // use navigate hook is used to navigate through the pages inside the project
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  }


  return (
    <div>
      <section className='contact-section'>
        <h1 className='contact-heading'>Contact</h1>
        <ul className='contact-list'>
          <li className='contact-items'>Linkedin</li>
          <li className='contact-items'>Instagram</li>
          <li className='contact-items'>Github</li>
        </ul>
        <button onClick={goToHome}>Go to Home</button>
      </section>

    </div>
  )
}

export default Contact;