import React from 'react';
import Maincontent from './Maincontent';

import Mainhead from './Mainhead';

const Mainbox = () => {
    return (
        <div id="Mainbox" className="col-span-12  flex flex-col  overflow-y-scroll scroll1">
            <Mainhead />
            <Maincontent />
        </div>
    );
};

export default Mainbox;