import React, { useReducer } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const baseUrl = process.env.NODE_ENV !== 'production' ? `http://${window.location.hostname}:9000` : '';
const netlifyPath = '/.netlify/functions';

const fields = 
{
  firstName: null,
  number: null,
  type: null,
  address: null,
  postCode: null,
  city: null,
  challenge: null,
};

const Form = ({ history }) => {
  const [formData, setFormData] = useReducer((state, newState) => ({...state, ...newState}), fields);
  const { firstName, number, type, address, postCode, city, challenge } = formData;

  const handleChange = event => {
    setFormData({ [event.target.name]: event.target.value });
  };

  const handleClickRadio = value => event => {
    setFormData({ [event.target.name]: value });
  };

  const handleValidate = () => {
    (async () => {
      try {
        await axios.post(`${baseUrl}${netlifyPath}/create`, formData);
        history.push('/');
      } catch (err) {
        console.log('Une erreur est survenue', err.message);
      }
    })();
  };

  return (
    <>
      <h4 className="w3-section">
        <strong>Ajouter un nouveau PM</strong>
      </h4>
      
      <div className="w3-section">
        <div className="w3-container w3-padding">
          <div className="w3-quarter w3-container" />
          <div className="w3-half w3-container">
            <input type="text" name="firstName" placeholder="Votre prénom" className="w3-input" onChange={handleChange} value={firstName} />
          </div>
          <div className="w3-quarter w3-container" />
        </div>

        <div className="w3-container w3-padding">
          <div className="w3-quarter w3-container" />
          <div className="w3-half w3-container">
            <input type="number" name="number" placeholder="N° PM" className="w3-input" onChange={handleChange} value={number} />
          </div>
          <div className="w3-quarter w3-container" />
        </div>
        
        <div className="w3-container w3-padding">
          <div className="w3-quarter w3-container" />
          <div className="w3-half w3-container">
            <label className="w3-half w3-container">
              <input type="radio" name="type" className="w3-radio" onChange={handleClickRadio('PME')} checked={type === 'PME'} />
              <span>PME</span>
            </label>
            <label className="w3-half w3-container">
              <input type="radio" name="type" className="w3-radio" onChange={handleClickRadio('PMI')} checked={type === 'PMI'} />
              <span>PMI</span>
            </label>
          </div>
          <div className="w3-quarter w3-container" />
        </div>
        
        <div className="w3-container w3-padding">
          <div className="w3-quarter w3-container" />
          <div className="w3-half w3-container">
            <input type="text" name="address" placeholder="Adresse (numéro et rue)" className="w3-input" onChange={handleChange} value={address} />
          </div>
          <div className="w3-quarter w3-container" />
        </div>
        
        <div className="w3-container w3-padding">
          <div className="w3-quarter w3-container" />
          <div className="w3-half w3-container">
            <input type="number" name="postCode" placeholder="Code postal" className="w3-input" onChange={handleChange} value={postCode} />
          </div>
          <div className="w3-quarter w3-container" />
        </div>
        
        <div className="w3-container w3-padding">
          <div className="w3-quarter w3-container" />
          <div className="w3-half w3-container">
            <input type="text" name="city" placeholder="Ville" className="w3-input" onChange={handleChange} value={city} />
          </div>
          <div className="w3-quarter w3-container" />
        </div>
        
        <div className="w3-container w3-padding">
          <div className="w3-quarter w3-container" />
          <div className="w3-half w3-container">
            <select class="w3-select" name="challenge" onChange={handleChange} value={challenge}>
              <option value="" disabled selected>Niveau de difficulté à trouver</option>
              <option value="easy">Facile</option>
              <option value="medium">Moyen</option>
              <option value="hard">Difficile</option>
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
            <button className="w3-btn w3-white w3-border w3-border-indigo w3-round-xlarge" onClick={handleValidate}>Ajouter ce PM</button>
          </div>
          <div className="w3-quarter w3-container" />
        </div>
      </div>
    </>
  );
};

export default withRouter(Form);
