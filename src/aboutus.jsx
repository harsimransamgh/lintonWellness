// ... (your existing imports and component definition)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './aboutUs.css'; // Make sure to import your styles
import logo from './logo rectangle.png';

const AboutUs = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fullContent, setFullContent] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleContent = () => {
    setFullContent(!fullContent);
  };

  return (
    <div>
      {/* Header */}
      <div className="header">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <button className="free-trial-button2">Free Trial</button>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/audienceinteraction">Audience Interaction</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="about-us-container">
        <h1 className="about-us-heading">Our Story</h1>
        <div className="about-us-content" style={{ maxHeight: fullContent ? 'none' : '300px' }}>
          <p>
            {fullContent ? (
              <>
                {/* If 'fullContent' is true, show the entire content */}
                I must confess that movies and movie stars have played a significant role in shaping my life.  
          Two, in particular, have held special significance for me in the context of my journey with Parkinson's. 
          First, Michael J. Fox. 
          During my first ever visit to the United States while still living in South Africa, I was determined to find and purchase a pair of the same red-striped, white Nike sneakers that he wore in "Back to the Future." His character Alex Keaton in "Family Ties" also inspired me to adopt a "preppy" look, as a law student right down to the same tan executive briefcase. Ironically, it was years later, that I would share more with him in the real world far away from characters and fashions in a movies or television shows. 
          Like Michael, I too was diagnosed with Parkinson's disease at the age of 49. Initially, my health goal was to avoid my father's fate, who passed away at the age of forty-five. I was just six from heart disease. Life had a different plan for me. 
          It took three years to receive a formal diagnosis. Despite trying various remedies, from physiotherapy  and acupuncture to herbal concoctions, none provided relief. Eventually, a neurologist confirmed Adult-Onset Parkinson's within thirty minutes of my the start of my first appointment. 
          The news brought a mix of emotions—relief at finally knowing my condition but uncertainty about the future. 
          The first two years post-diagnosis saw me traversing all of the stages of grief. Initially denying the condition, I concocted excuses to mask its reality. Living in denial heightened my anxiety, turning me into a recluse. I engaged less and less with my family, spending days and nights on my couch. The couch became my refuge, my safety zone. If I did manage to venture away from it, I was frequently overcome with anxiety, making my physical symptoms worse. My family gave up on trying to get me off the couch. They It became my refuge, The lowest point came when alone on a Saturday night, feeling abandoned, even by our pet dog, Becky. 
          In a moment of despair, I unleashed a torrent of emotions—anger, tears— eventually finding solace in acceptance. Realizing I still had a life, a job, and relationships, I decided to break free at that very moment from my  couch - which had become my refuge - to initiate a journey of physical activity. I started walking, then jogging and like another character, "Forest Gump", kept on running.  
          Rediscovering a childhood passion, drumming, became another therapeutic outlet. The daily rhythm brought relief, and lessons in drumming led to performances in renowned festivals. 
          Michael J. Fox played a pivotal role in reclaiming my life, but for future inspiration, I turn to Matthew McConaughey.  
          His Oscar acceptance speech emphasized the importance of having someone to look up to, someone to look forward to, and someone to chase—his hero, himself in ten years. That resonated deeply with me. 
          Ten years ago, I was beginning my life with Parkinson’s. Convinced that my life was over at 49, I often struggled to make it through the day. It was impossible to think what my life would be like in ten years. 
          I would never have believed it, had I heard it then, that in 2023 alone in the year I turned 60, I would train and complete a 100 km bike ride in July and then transition to running and complete my fourth half-marathon in October. 
          I would never have believed it, had I heard it then, that I would become a semi-professional percussionist known as "The Conga Guy" and that I would be invited to play in a band in the internationally renowned Beaches International Jazz Festival. 
          I would never have believed it, had I heard it then, that I would deal with ongoing challenges with humility and grace and continue to live my life as best I can. 
          I would never have believed it, had I heard it then, that I would be inspired to write a book and add “author” to my curriculum vitae. 
          Yet, ten years after my diagnosis, I have achieved all this, and much more. My life today is, in many respects, more meaningful, rewarding, and fulfilling than at any time before my diagnosis. I like the person I have become with Parkinson's. I no longer live in the past thinking of what my life once was. I don't look too much into the future either. I have learned to live mindfully in the present, conscious of what I see, feel, taste and experience now in the moment.
                {/* ... (rest of your content) */}
              </>
            ) : (
              <>
                {/* If 'fullContent' is false, show a truncated version */}
                I must confess that movies and movie stars have played a significant role in shaping my life.
                Two, in particular, have held special significance for me in the context of my journey with Parkinson's.
                First, Michael J. Fox.
                {/* ... (a part of your content) */}
              </>
            )}
          </p>
          {/* Read More/Read Less Button */}
          <button className="read-more-button" onClick={toggleContent}>
            {fullContent ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
