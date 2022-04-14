import React from 'react';

import mosque from '../../../assets/images/mosque.jpg'

const Speshimg = () => {
    return (
        <div id="Speshimg" className="flex items-center col-span-12 md:col-span-2 max-h-72 rounded-lg overflow-hidden shadow-lg">
            <img src={mosque} className="w-full" alt="speshialimg" />
        </div>
    );
};

export default Speshimg;