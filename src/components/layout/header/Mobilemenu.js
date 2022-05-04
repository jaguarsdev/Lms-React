import React from 'react';

import Alignright from '../assets/svgicon/Alignright.svg'

const Mobilemenu = () => {
    return (
        <div className="md:hidden ">
            <img src={Alignright} className="h-10 w-10 border-2 border-white p-2 rounded-md" alt="meno" />
        </div>
    );
};

export default Mobilemenu;