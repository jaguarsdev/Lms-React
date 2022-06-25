import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/svgicon/logo.svg';

const Logoheader = () => {
    return (
        <div id="logo" className="w-14 relative">     
                <object data={logo} title="logo" type="image/svg+xml" />
            <Link to={`/`} className="w-10 h-10"><div className='w-full h-full absolute top-0 left-0'></div>
            </Link>
        </div>
    );
};

export default Logoheader;