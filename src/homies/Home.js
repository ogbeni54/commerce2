import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { MyContext } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Naviao from '../navigation/Naviao';
import './Home.css';

export default function Home() {
  const { state, handleClick } = useContext(MyContext);
  const { profile, favri } = state;
  const [currencies, setCurrencies] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    axios.get('https://api.terawork.com/resources')
      .then(res => {
        setCurrencies(res.data.data.currencies);
      })
      .catch(error => {
        console.error('Error fetching currencies:', error);
      });
  }, []);

  const Hearty = ({ index }) => {
    const iconClassName = favri[index] ? 'haty' : 'hat';
    return (
      <FontAwesomeIcon
        icon={faHeart}
        className={iconClassName}
        onClick={() => handleClick(index)}
      />
    );
  };

  const handleCurrencyChange = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
  };

  return (
    <div className="entire">
      <div className="main">
        <Naviao handleClick={handleClick} />
        <div className="vertical-line"></div>
        <div className="sect2">
          <h1 className="top1">Hire Top Developers</h1>
          <div className="content">
            {profile && (
              <div className="container">
                {profile.map((prof, index) => {
                  const result = prof._source;
                  return (
                    <div className="item" key={index}>
                      <div className="item-cont">
                        <img
                          src={result.service_photo}
                          alt="background Img"
                          className="bg-img"
                        />
                        <Hearty index={index} />
                        <img
                          src={result.avatar}
                          alt="display pic"
                          className="display-pic"
                        />
                        <div className="profile">
                          <h5>{result.display_name}</h5>
                          <span className="input-details">
                            <p className="val">
                              {value}
                              {result.starting_from}
                            </p>
                            <p className="hi">Hire</p>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="drop-bar">
            <div className="dropdown">
              <select
                name="currency"
                onChange={handleCurrencyChange}
              >
                <option value="">Select a currency</option>
                {currencies.map((currency) => (
                  <option value={currency.symbol} key={currency.symbol}>
                    {currency.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
