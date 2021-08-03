import axios from 'axios';
import React, { useState } from 'react';
import { Header } from 'src/Header/Header';
import { RepoList } from 'src/RepoList';

export const Home = () => {
  return (
    <div className="root">
      <Header />
      <div className="body">
        <RepoList />
      </div>
    </div>
  );
};
