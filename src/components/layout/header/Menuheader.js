import React from 'react';

const Menuheader = () => {
    return (
        <div id="top-menu" className="hidden md:block">
            <nav>
                <ul className="flex items-center gap-4">
                    <a href="https://lmsava.ir" className=""><li>صفحه نخست</li></a>
                    <a href="https://avayetowheed.ir" className=""><li>آوای توحید</li></a>
                    <a href="https://lmsava.ir/contact" className=""><li>تماس با ما</li></a>
                </ul>
            </nav>
        </div>
    );
};

export default Menuheader;