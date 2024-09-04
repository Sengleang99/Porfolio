import React from 'react';

function Slash() {
    return (
        <div className='mx-auto px-4 flex flex-col md:flex-row items-center justify-between w-full py-4'>
            <h4 className='text-xl font-bold mb-4 md:mb-0'>SENGLEANG</h4>
            <div>
                <ul className='flex flex-col md:flex-row md:space-x-6 text-lg'>
                    <li className='mb-2 md:mb-0 hover:text-blue-500 cursor-pointer'>Home</li>
                    <li className='mb-2 md:mb-0 hover:text-blue-500 cursor-pointer'>About</li>
                    <li className='mb-2 md:mb-0 hover:text-blue-500 cursor-pointer'>Project</li>
                    <li className='hover:text-blue-500 cursor-pointer'>Contact</li>
                </ul>
            </div>
            <div className='mt-4 md:mt-0'>
                <button className='bg-blue-500 text-white py-2 px-5 rounded hover:bg-blue-600'>
                    Hire me
                </button>
            </div>
        </div>
    );
}

export default Slash;
