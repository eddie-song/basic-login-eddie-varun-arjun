import React, { useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nameCheck, setNameCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  var converter = require('number-to-words');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && password && nameCheck && passwordCheck) {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    if(name.length >= 20 && name.toLowerCase().includes(converter.toWords(name.length).replace('-', ''))) {
      setNameCheck(true);
    }
    console.log(converter.toWords(name.length).replace('-', ''));
  }, [name]);

  useEffect(() => {
    if(password.toLowerCase().includes(converter.toWords(name.length+password.length).replace('-', ''))) {
      setPasswordCheck(true);
    }
    console.log(converter.toWords(name.length+password.length).replace('-', ''));
  }, [password]);

  return (
    <div className="App">
      {isLoggedIn ? (
        <h1>Welcome, {name}! You have successfully logged in.</h1>
      ) : (
        <div className='container'>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Enter</button>
          </form>
          <div className='instructions'>
            <div>Instructions: your name must contain at least 20 letters and must include the number of characters in your username in WORD FORM. This must ALSO include the characters in the number.
            <br></br><br></br>For example, if your name is 123456789, you must include the word "nine" in your name. But this won't work because adding nine would change the length to 12.</div>
            <br></br>
            <div>Instructions: your password must contain the combined number of characters in your name and password in WORD FORM.</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
