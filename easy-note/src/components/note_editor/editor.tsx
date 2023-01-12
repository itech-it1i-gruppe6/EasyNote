import { FC } from 'react';
import DropdownIconMenu from '../dropdown/dropdown_icon_menu';

const Editor: FC = (): JSX.Element => {
    return (
      <div className=" mx-auto max-w-2xl py-9">
        <div className=" py-1 px-3 sm:text-left lg:px-3 ">
          <div>
            <div>
              <div className="  flex gap-x-96 py-0">
                <div className="py-1 text-3xl font-bold">Your notes name</div>
                <DropdownIconMenu
                  items={[
                    {
                      name: "rename",
                      action: () => alert("hi"),
                    },
                    {
                      name: "delete",
                      action: () => alert("delete"),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <textarea
            className="border-warm-gray-700 focus:border-1 block h-80 w-full rounded-xl border-2 border-gray-200 bg-white bg-clip-padding px-4
                                     py-3 text-base font-normal text-gray-500 transition ease-in-out
                                    focus:border-gray-600 focus:bg-white focus:text-gray-500  focus:outline-none"
            id="exampleFormControlTextarea1"
            placeholder="Write your thoughts here "
          ></textarea>
        </div>
        <div className="flex flex-row-reverse gap-x-4 py-3 ">
          <button className=" rounded-full border-2 border-black bg-white py-1 px-6 font-normal text-black hover:bg-gray-200">
            Save
          </button>
          <button className="rounded-full border-2 border-black bg-white py-1 px-6 font-normal text-black hover:bg-gray-200">
            Cancel
          </button>
        </div>
      </div>
    );
};

export default Editor;
