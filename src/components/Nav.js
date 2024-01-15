import React from 'react'

const Nav = () => {
    return (
        <div className='flex justify-between text-pcolor bg-cards rounded-2xl'>
            <div className='flex items-center justify-start gap-5 px-3 py-4 w-1/3'>
                <h1>Friendify</h1>
            </div>
            <div className='flex border-l-2 border-accent items-center justify-center  py-4 px-3 w-1/3'>
                <ul className='flex items-center text-center gap-5 px-3 py-4'>
                    <li><a>About/</a></li>
                    <li><a>Categories/</a></li>
                    <li><a>Blog/</a></li>
                </ul>
            </div>
            <div className='flex border-l-2 border-accent items-center justify-center py-4 px-3 flex-grow'>
                <ul className='flex items-center gap-5 px-3 py-4'>
                    <li><a href=''><i class="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href=''><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href=''><i class="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
            </div>
            <div className='flex justify-center items-center border-l-2 border-accent px-3 py-4 flex-grow'>
                <p>Employees Only</p>
            </div>
        </div>
    )
}

export default Nav;