/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Navbar = () => {
    return (
        <div className="fixed z-10 navbar bg-black md:w-[75vw]">
            <div className="flex-1">
                <a className="btn btn-ghost text-4xl text-gray-400 1440p:my-4 1440p:text-[3.5rem]">
                    {"{"}<span className='text-white'>A</span>{"}"}
                </a>
            </div>
            <div className="flex-none">
                {/* <ul className="menu menu-horizontal px-1 1440p:text-[1.5rem]">
                    <li>
                        <details>
                            <summary>Sections</summary>
                            <ul className="bg-base-100 p-2 rounded-t-none">
                                <li className='my-2 text-3xl'><a>Projects</a></li>
                                <li className='my-2 text-3xl'><a>Contacts</a></li>
                            </ul>
                        </details>
                    </li>
                </ul> */}
            </div>
        </div>
    )
}

export default Navbar