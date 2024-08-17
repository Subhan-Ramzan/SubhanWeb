import React from 'react'

const Navbar = () => {
    return (
        <div className='p-1 navbar flex justify-around bg-purple-700 text-white'>
            <div className='itask'>iTask</div>
            <div className='home-2 flex gap-20'>
                <div>Home</div>
                <div>Your Task</div>
            </div>
        </div>
    )
}

export default Navbar