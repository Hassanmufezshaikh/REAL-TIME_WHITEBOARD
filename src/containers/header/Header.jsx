import React, { useState } from 'react';
import axios from 'axios';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
  const [email, setEmail] = useState('');

  const handleInvite = async () => {
    try {
      const response = await axios.post('http://localhost:4000/send-invite', { email });
      if (response.status === 200) {
        alert('Invitation sent!');
      }
    } catch (error) {
      console.error('Error sending invitation:', error);
      alert('Failed to send invitation. Please try again.');
    }
  };

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let&apos;s Build Something amazing with Real-Time WhiteBoard AI</h1>
        <p>Our Real-Time Whiteboard AI makes collaboration easy. Work together on a shared digital canvas with smart AI features. Enjoy real-time updates, drawing suggestions, and templates. Let's create something amazing together with AI.</p>

        <div className="gpt3__header-content__input">
          <input 
            type="email" 
            placeholder="Your Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="button" onClick={handleInvite}>Invite</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt='people'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt='ai'/>
      </div>
    </div>
  );
};

export default Header;
  