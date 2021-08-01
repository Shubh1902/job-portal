import axios from 'axios';
import React, { useState } from 'react';
import { Header } from 'src/Header';

export const Home = () => {
  const handleGitUserNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGitUserName(event.target.value);
  };
  const [gitUserName, setGitUserName] = useState('');
  const addGitProfile = () => {
    axios
      .get(`https://api.github.com/users/${gitUserName}/repos`)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  return (
    <div className="root">
      <Header />
      <hr />
      <input
        type="text"
        value={gitUserName}
        onChange={handleGitUserNameChange}
      />
      <button onClick={addGitProfile}>Link Git Profile</button>
    </div>
  );
};
