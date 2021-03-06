import React from 'react';
import Image from 'next/image';

function Header() {
    return (
        <header className = "sticky top-0 zd-50 grid-col-3 bg-white shadow-md p-5 md:px-10">
            {/* Left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3"
                    layout='fill'
                    objectFit='contain' objectPosition="left"
                />
            </div>

            {/* Middle*/}
            <div>
                <input type="" />
            </div>
            {/* right */}
            <div></div>
        </header>
    );
}

export default Header;

