import React from 'react';

import logo from '../assets/svgicon/logo.svg';

const Logoheader = () => {
    return (
        <div id="logo" className="w-14">     
             <object data={logo} type="image/svg+xml" ></object>
        </div>
    );
};

export default Logoheader;