import React from 'react';
import Centerslid from './Centerslid';
import Slideside from './Slideside';
import Speshimg from './Speshimg';

const Slidesection = () => {
    return (
        <section id="Slidesection" className="grid grid-cols-12 gap-2">
            <Speshimg />
            <Centerslid />
            <Slideside />
        </section>
    );
};

export default Slidesection;