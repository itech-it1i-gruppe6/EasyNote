import { NextPage } from "next";
import * as React from 'react';
import { Class } from "superjson/dist/types";

function Test() {


    return (
        <div>
            <div className="flex justify-center">
                <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                    <div className="py-3 px-6 border-b border-gray-300">
                        Your Note
                    </div>
                    <div className="p-6">
                        <div className="flex justify-center">
                            <div className="mb-3 xl:w-96">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                <div className="mt-5 md:col-span-2 md:mt-0">
                                    <textarea
                                        className="form-control block w-full
                                    px-3 py-1.5 text-base font-normal text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    "id="exampleFormControlTextarea1" placeholder="Write your thoughts here">
                                    </textarea>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row-reverse gap-x-4">
                            <div>
                                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Save</button>
                            </div>
                            <div>
                                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Test;