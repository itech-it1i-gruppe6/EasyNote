import { NextPage } from "next";
import * as React from 'react';
import { Class } from "superjson/dist/types";

function Test1() {


    return (
        <div>
            <div className="bg-violet-800">
                <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                </div>
            </div>

            <div className=" mx-auto max-w-2xl py-12 ">
                <div className="flex  gap-x-4 py-4 ">
                    <div className="py-1 text-2xl font-bold">
                        <div>
                            Your notes name
                        </div>
                    </div>
                    <div>

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
                    <button className=" border-2 border-black bg-white hover:bg-gray-300 text-black font-normal py-1 px-6 rounded-full">
                        Save
                    </button>
                    <button className="border-2 border-black bg-white hover:bg-gray-300 text-black font-normal py-1 px-6 rounded-full">
                        Cancel
                    </button>
                </div>


            </div>
        </div>

    )
}

export default Test1;