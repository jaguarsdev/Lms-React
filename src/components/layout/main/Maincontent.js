import React from 'react';
import Mahbobsectionroot from './sections/mahbobsection/Mahbobsectionroot';
import Slidesection from './sections/slidesection/Slidesectionroot';

const Maincontent = () => {
    return (
        <div id="Maincontent" className="bg-white/50 dark:bg-black/25 p-2 mb-52">
            <Slidesection />
            <Mahbobsectionroot />
        </div>
    );
};

export default Maincontent;