import React from 'react';
import { useLocation } from 'react-router-dom';

import Maincontent from './Maincontent';
import Login from './Login';
import Mainhead from './Mainhead';

const Mainbox = () => {
    const userCurrent = useLocation()
    // console.log(userCurrent.pathname)
    
    function rootrender (){
        if(userCurrent.pathname === "/login"){
            return <Login />;
        }
        return <Maincontent />;
    }


    return (
        <div id="Mainbox" className="col-span-12  flex flex-col  overflow-y-scroll scroll1">
            <Mainhead />
            {rootrender()}
        </div>
    );
};

export default Mainbox;