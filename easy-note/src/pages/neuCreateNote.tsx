import { NextPage } from "next";
import * as React from 'react';


function Test1(): JSX.Element {

    return (
        <div>
            <div className="bg-violet-800">
                <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                </div>
            </div>
            <div className=" mx-auto max-w-2xl py-9">
                <div className=" py-1 px-3 sm:text-left lg:px-3 ">
                    <div >
                        <div>
                            <div className="  flex gap-x-96 py-0">
                                <div className="py-1 text-3xl font-bold">
                                    Your notes name
                                </div>
                                <div className="inline-block ">
                                    <div className="absolute px-4">
                                        <button type="button" className="mt-4 inline-flex h-6 w-6 items-center mx- justify-center rounded-md hover:bg-gray-200 e focus:ring-1 focus:ring-gray-200  "
                                            id="menu-button" data-dropdown-toggle = "dropdownDots" aria-expanded="true" aria-haspopup="true">
                                            <svg className="  h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                                            </svg>
                                        </button>
                                        <div id="dropdownDots" className="hidden absolute right-0  z-12 mt-4 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                            role="menu" aria-orientation="vertical" tabIndex={-1}>
                                            <ul className="py-1" role="none" aria-labelledby="menu-button">
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:bg-gray-200 block px-4 py-2 text-sm  rounded-md" role="menuitem" tabIndex={-1} id="menu-item-0">Option1</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:bg-gray-200 block px-4 py-2 text-sm  rounded-md" role="menuitem" tabIndex={-1} id="menu-item-1">Option2</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:bg-gray-200 block px-4 py-2 text-sm  rounded-md" role="menuitem" tabIndex={-1} id="menu-item-2">Option3</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center ">
                    <textarea
                        className="block w-full rounded-xl border-warm-gray-700 px-4 py-3 text-base font-normal text-gray-500 bg-white bg-clip-padding
                                     transition ease-in-out focus:text-gray-500 focus:bg-white focus:border-gray-600 focus:border-1
                                    focus:outline-none h-80 border-2  border-gray-200" id="exampleFormControlTextarea1" placeholder="Write your thoughts here ">
                    </textarea>

                </div>
                <div className="flex flex-row-reverse gap-x-4 py-3 ">
                    <button className=" border-2 border-black bg-white hover:bg-gray-200 text-black font-normal py-1 px-6 rounded-full">
                        Save
                    </button>
                    <button className="border-2 border-black bg-white hover:bg-gray-200 text-black font-normal py-1 px-6 rounded-full">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}


/*<div className="absolute">
    <button type=
        "button" className="mt-7 inline-flex h-6 w-6 items-center mx- justify-center rounded-md
                                  hover:bg-gray-200 e focus:ring-1 focus:ring-gray-200  "
        id="menu-button" aria-expanded="true" aria-haspopup="true">

        <svg className="  h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>"
        </svg>
    </button>
    <div className="absolute right-0  z-12 mt-4 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
        <div className="py-1" role="none">

            <a href="#" className="text-gray-700 hover:bg-gray-200 block px-4 py-2 text-sm  rounded-md" role="menuitem" id="menu-item-0">Option1</a>
            <a href="#" className="text-gray-700 hover:bg-gray-200 block px-4 py-2 text-sm  rounded-md" role="menuitem" id="menu-item-1">Option2</a>
            <a href="#" className="text-gray-700 hover:bg-gray-200 block px-4 py-2 text-sm  rounded-md" role="menuitem" id="menu-item-2">Option3</a>
        </div>
    </div>
</div>*/

export default Test1;
