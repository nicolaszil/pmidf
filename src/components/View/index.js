import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Header from '../Header';
import Menu from '../Menu';

import './styles.css';

const baseUrl = process.env.NODE_ENV !== 'production' ? `http://${window.location.hostname}:9000` : '';
const netlifyPath = '/.netlify/functions';

const View = ({ match: route }) => {
  const [location, setLocation] = useState({});
  const [challenge, setChallenge] = useState();

  useEffect(() => {
    (async () => {
      await axios.get(`${baseUrl}${netlifyPath}/view`)
      .then(({ data }) => {
        setLocation(data.location);
        setChallenge(data.challenge);
      });
    })();
  }, []);

  return (
    <div className="main">
      <Header />
      <Menu />

      <h1 className="view-title">PM {route.params.pmId}</h1>

      <div className="view-address">
        <h3 className="view-address-title">{'Adresse'.toUpperCase()}</h3>
        <div className="view-address-description">
          <div>{location.address}</div>
          <div>{location.postCode} - {location.city}</div>
        </div>
      </div>

      <div className="view-location-challenge">
        <h3 className="view-location-challenge-title">{'Difficulté de répérage'.toUpperCase()}</h3>
        <div className="view-location-challenge-description">{challenge}</div>
      </div>

      <div className="view-picture" />
      <aside className="view-map"></aside>
    </div>
  );
};

export default View;
