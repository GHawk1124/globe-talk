import React, { useState } from "react";

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <label htmlFor="language-select">Select a language:</label>
      <select
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
      <p>You selected: {selectedLanguage}</p>
    </div>
  );
}

export default LanguageSelector;