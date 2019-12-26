import React from 'react';

import Header from '../Header';
import Menu from '../Menu';

import './styles.css';

const Add = () => {
  return (
    <div className="main">
      <Header />
      <Menu />

      <h4 className="w3-section">
        <strong>Ajouter un nouveau PM</strong>
      </h4>
      
      <div className="w3-section">
        <div className="w3-container w3-padding">
          <div className="w3-quarter w3-container" />
          <div className="w3-half w3-container">
            <input type="text" name="firstname" placeholder="Votre prénom" className="w3-input" />
          </div>
          <div className="w3-quarter w3-container" />
        </div>

        <div className="w3-container w3-padding">
          <div className="w3-quarter w3-container" />
          <div className="w3-half w3-container">
            <input type="number" name="number" placeholder="N° PM" className="w3-input" />
          </div>
          <div className="w3-quarter w3-container" />
        </div>
        
        <div className="w3-container w3-padding">
          <div className="w3-quarter w3-container" />
          <div className="w3-half w3-container">
            <label className="w3-half w3-container">
              <input type="radio" name="type" className="w3-radio" />
              <span>PME</span>
            </label>
            <label className="w3-half w3-container">
              <input type="radio" name="type" className="w3-radio" />
              <span>PMI</span>
            </label>
          </div>
          <div className="w3-quarter w3-container" />
        </div>
        
        <div className="w3-container w3-padding">
          <div className="w3-quarter w3-container" />
          <div className="w3-half w3-container">
            <input type="text" name="address" placeholder="Adresse (numéro et rue)" className="w3-input" />
          </div>
          <div className="w3-quarter w3-container" />
        </div>
        
        <div className="w3-container w3-padding">
          <div className="w3-quarter w3-container" />
          <div className="w3-half w3-container">
            <input type="number" name="postcode" placeholder="Code postal" className="w3-input" />
          </div>
          <div className="w3-quarter w3-container" />
        </div>
        
        <div className="w3-container w3-padding">
          <div className="w3-quarter w3-container" />
          <div className="w3-half w3-container">
            <input type="text" name="city" placeholder="Ville" className="w3-input" />
          </div>
          <div className="w3-quarter w3-container" />
        </div>
        
        <div className="w3-container w3-padding">
          <div className="w3-quarter w3-container" />
          <div className="w3-half w3-container">
            <select class="w3-select" name="challenge">
              <option value="" disabled selected>Niveau de difficulté à trouver</option>
              <option value="Facile">Facile</option>
              <option value="Moyen">Moyen</option>
              <option value="Difficile">Difficile</option>
            </select>
          </div>
          <div className="w3-quarter w3-container" />
        </div>
        
        <div className="w3-container w3-padding">
          <div className="w3-quarter w3-container" />
          <div className="w3-half w3-container">
            <input type="file" name="picture" placeholder="Ajouter une photo du PM" className="w3-input" />
          </div>
          <div className="w3-quarter w3-container" />
        </div>
        
        <div className="w3-container w3-padding">
          <div className="w3-quarter w3-container" />
          <div className="w3-half w3-container">
            <button className="w3-btn w3-white w3-border w3-border-indigo w3-round-xlarge">Ajouter ce PM</button>
          </div>
          <div className="w3-quarter w3-container" />
        </div>
      </div>
    </div>
  );
};

export default Add;
