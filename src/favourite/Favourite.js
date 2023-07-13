import React, { useContext } from 'react';
import { MyContext } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Naviao from '../navigation/Naviao';

export default function Favourite() {
  const { state } = useContext(MyContext);
  const { profile, favri } = state;

  const Hearty = () => {
    const iconClassName = 'haty';
    return <FontAwesomeIcon icon={faHeart} className={iconClassName} />;
  };

  const favP = profile.filter((_, index) => favri[index]);

  return (
    <div>
        <div className="entire">
      <div className="main">
        <Naviao />
        <div className="vertical-line"></div>
        <div className="sect2">
          <h1 className="top1">Hire Top Developers</h1>
          <div className="content">
      {profile && (
        <div className="container">
          {favP.map((prof, index) => {
            const result = prof._source;
            return (
              <div className="item" key={index}>
                <div className="item-cont">
                  <img
                    src={result.service_photo}
                    alt="background Img"
                    className="bg-img"
                  />
                  <div className="favorite-icon">
                    <Hearty />
                  </div>
                  <img
                    src={result.avatar}
                    alt="display pic"
                    className="display-pic"
                  />
                  <div className="profile">
                    <h5>{result.display_name}</h5>
                    <span className="input-details">
                      <p className="val">
                        <span>&#x20A6;</span>
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
      </div>
      </div>
      </div>
    </div>
  );
}
