import React from 'react';

const Mobilemenu = () => {
    return (
        <div className="md:hidden">
            {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 border p-1 rounded-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 border p-1 rounded-md" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
        </div>
    );
};

export default Mobilemenu;