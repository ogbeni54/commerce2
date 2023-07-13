// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';
// import Home from '../homies/Home';
// import Favourite from '../favourite/Favourite';
// import Naviao from '../navigation/Naviao';


// export default function Main() {
  

//   return (
    
//     <div className="entire">
//       <div className="main">
//       <Naviao/>
//         <div className="vertical-line"></div>
//         <div className="sect2">
//           <h1 className="top1">Hire Top Developers</h1>
//           <div className="content">
//            <Home/>
//            <Favourite/>
//           </div>
//         </div>
//       </div>
//     </div>
    
//   );
// }


import React from 'react';
import Home from '../homies/Home';
import Favourite from '../favourite/Favourite';
import Naviao from '../navigation/Naviao';

export default function Main() {
  return (
    <div className="entire">
      <div className="main">
        <Naviao />
        <div className="vertical-line"></div>
        <div className="sect2">
          <h1 className="top1">Hire Top Developers</h1>
          <div className="content">
            {/* <Home /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
