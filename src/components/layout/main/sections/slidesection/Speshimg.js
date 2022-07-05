import React from 'react';

import sabkezendegi from '../../../assets/images/sabkezendegi.webp'

const Speshimg = () => {
    return (
        <div id="Speshimg" className="flex h-full items-center col-span-12 md:col-span-2 max-h-72 rounded-lg overflow-hidden shadow-lg">
            <img src={sabkezendegi} className="w-full h-full" alt="speshialimg" />
        </div>
    );
};

export default Speshimg;