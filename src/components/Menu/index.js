import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

import './styles.css';

import ROUTES from '../../routes';

const Menu = ({ match: route }) => {
  return (
    <div className="menu">
      {route.path !== ROUTES.HOME && <Link to="/">
        <button>Liste des PM</button>
      </Link>}

      {route.path !== ROUTES.ADD && <Link to="/add-pm">
        <button className="w3-button w3-large w3-circle w3-indigo" style={{ 'zIndex': 0 }}>
          +
        </button>
      </Link>}
    </div>
  );
};

export default withRouter(Menu);
