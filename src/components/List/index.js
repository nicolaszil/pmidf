import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './styles.css';

const baseUrl = process.env.NODE_ENV !== 'production' ? `http://${window.location.hostname}:9000` : '';

const List = () => {
  const [pmList, setPmList] = useState([]);

  useEffect(() => {
    (async () => {
      await axios.get(`${baseUrl}/.netlify/functions/list`)
      .then(({ data }) => setPmList(data || []));
    })();
  }, []);

  return (
    <div className="list">
      <div className="list-title">Liste des PM</div>

      {pmList.map((pm, index) =>
        <div className="list-element" key={index}>
          <span className="pm-id">{pm.id}</span>
          <span className="pm-location">{pm.location}</span>

          <Link to={`/view-pm/${pm.id}`}>
            <span className="pm-view">
              <button>Voir</button>
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default List;
