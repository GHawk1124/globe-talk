import React, { useState } from 'react';
import Modal from '../utils/Modal';
import {useNavigate} from 'react-router-dom';

function HeroHome() {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [username, setUsername] = useState("");
  const [roomNumber, setRoomNumber] = useState("");

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleSubmit = (event) => {
    if(username==="" || selectedLanguage==null || roomNumber===""){
      alert("Please fill out all sections")
      event.preventDefault();
    } 
    else{
      navigate("/newsletter", {state: { username: {username}, language: {selectedLanguage}, roomNumber: {roomNumber}}});
    }
  };

  return (
    <section className='grid place-items-center h-screen'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Illustration behind hero content */}
        <div
          className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none"
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="400"
        >
        </div>

        {/* Hero content */}
        <div className="relative pt-10 pb-10 md:pt-10 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Welcome to GlobeTalk
            </h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
              Enter your meeting code below
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="600">
                <input placeholder='Enter Username' onChange={e => setUsername(e.target.value)} value={username} className="placeholder-white appearance-none block w-full text-white-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-purple bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"/>
                 
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
              <select className = "appearance-none block w-full text-white-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-purple bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
              id="language-select"
              value={selectedLanguage}
              onChange={handleChange}
              >
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Spanish">Spanish</option>
              <option value="Chinese">Chinese</option>
              <option value="Japanese">Japanese</option>
              <option value="Russian">Russian</option>
              <option value="Arabic">Arabic</option>
              <option value="Hindi">Hindi</option>
              <option value="Bengali">Bengali</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Italian">Italian</option>
              <option value="Korean">Korean</option>
              <option value="Turkish">Turkish</option>
              <option value="Vietnamese">Vietnamese</option>
              <option value="Thai">Thai</option>
              <option value="Indonesian">Indonesian</option>
              <option value="Malay">Malay</option>
              </select>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="600">
                <input placeholder='Enter Room Number' onChange={e => setRoomNumber(e.target.value)} value={roomNumber} className="placeholder-white appearance-none block w-full text-white-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-purple bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"/>
                 
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
              <a href="/newsletter" onClick={handleSubmit} className="placeholder-white appearance-none block w-full text-white-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-purple bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0">
                Join Now
              </a>
              </div>
           
  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
