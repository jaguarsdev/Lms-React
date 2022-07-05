import React from 'react';
import Lastcourssectionroot from './sections/lastcourses/Lastcourssectionroot';
import Logosectionroot from './sections/logo/Logosectionroot';
import Slidesection from './sections/slidesection/Slidesectionroot';

const Maincontent = () => {
    return (
        <div id="Maincontent" className="bg-white/50 dark:bg-black/25 p-2 pb-32">
            <Slidesection />
            <Lastcourssectionroot />
            <Logosectionroot />
        </div>
    );
};

export default Maincontent;