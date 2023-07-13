import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default function Naviao({ handleClick }) {
  return (
    <div>
      <div className="sect1">
        <div className="logo">
          <p>
            <Link to="/">Dev<span className="blu">Hire</span></Link>
          </p>
        </div>
        <div className="navi">
          <div className="hom">
            <Link to="/" >
              <FontAwesomeIcon icon={faSearch} className="magnifying-glass-icon" />
            </Link>
            <span>Home</span>
          </div>
          <div className="fav">
            <Link to="/favourite" onClick={() => handleClick('favourite')}>
              <FontAwesomeIcon icon={faHeart} className="heart" />
            </Link>
            <span>Favourite</span>
          </div>
        </div>
      </div>
    </div>
  );
}
