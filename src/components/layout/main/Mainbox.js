import React from 'react';
import { useLocation } from 'react-router-dom';

import Maincontent from './Maincontent';
import Login from './Login';
import Signup from './Signup';
import Mainhead from './Mainhead';

const Mainbox = () => {
    const userCurrent = useLocation()
    
    function rootrender (){
        if(userCurrent.pathname === "/login"){
            return <Login />;
        }else if(userCurrent.pathname === "/register"){
            return <Signup />;
        }
        return <Maincontent />;
    }
    // register

    return (
        <div id="Mainbox" className="col-span-12  flex flex-col  overflow-y-scroll scroll1">
            <Mainhead />
            {rootrender()}
        </div>
    );
};

export default Mainbox;