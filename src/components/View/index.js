import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Header from '../Header';
import Menu from '../Menu';

import './styles.css';

const baseUrl = process.env.NODE_ENV !== 'production' ? `http://${window.location.hostname}:9000` : '';
const netlifyPath = '/.netlify/functions';

const View = ({ match: route }) => {
  const [PM, setPM] = useState({});
  const { firstName, number, type, address, postCode, city, challenge } = PM;

  useEffect(() => {
    (async () => {
      await axios.get(`${baseUrl}${netlifyPath}/view?pmId=${route.params.pmId}`)
      .then(({ data }) => setPM(data));
    })();
  }, []);

  return (
    <div className="main">
      <Header />
      <Menu />

      <h1 className="view-title">PM {number || route.params.pmId}</h1>

      <div className="view-location-challenge">
        <h3 className="view-location-challenge-title">{'DETAILS'.toUpperCase()}</h3>
        <div className="view-location-challenge-description">Type {type}</div>
        <div className="view-location-challenge-description">Ajouté par {firstName}</div>
      </div>

      <div className="view-address">
        <h3 className="view-address-title">{'Adresse'.toUpperCase()}</h3>
        <div className="view-address-description">
          <div>{address}</div>
          <div>{postCode} - {city}</div>
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
