import React from 'react';
import Lastcourssectionroot from './sections/lastcourses/Lastcourssectionroot';
// import Slidesection from './sections/slidesection/Slidesectionroot';

const Maincontent = () => {
    return (
        <div id="Maincontent" className="bg-white/50 dark:bg-black/25 p-2 mb-52">
            {/* <Slidesection /> */}
            <Lastcourssectionroot />
            
        </div>
    );
};

export default Maincontent;