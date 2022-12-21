import {
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EllipsisVerticalIcon,
  EnvelopeIcon,
  EnvelopeOpenIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import type { NextPage } from "next";
import * as React from "react";

const list = [
  {
    note: {
      name: "Einkaufsliste für Samstag Abend",
    },
    href: "#",
  },
  {
    note: {
      name: "Arzt Termine in einer Notits gesammelt",
    },
    href: "#",
  },
  {
    note: {
      name: "TÜV für das Auto / Geburtstagsgeschenk für Enkelkinder",
    },
    href: "#",
  },
];

function DeleteButton() {
  const handleClick = () => {
    alert("The delete button was clicked!");
  };
  return (
    <button onClick={handleClick}>
      <div className="pr-4">
        {" "}
        <TrashIcon className="h-7 w-7 text-gray-400" aria-hidden="true" />
      </div>
    </button>
  );
}

const Testlist: NextPage = () => {
  return (
    <div style={{ padding: "0 20%" }}>
      <div className="mx-auto overflow-hidden bg-white">
        <ul
          role="list"
          className="divide-y-2 divide-gray-200 border-b-2 border-gray-200"
        >
          {list.map((list, idx) => (
            <a key={idx} href={list.href} className="block hover:bg-gray-100">
              <div className="flex justify-between py-6">
                <div className=" pl-4">
                  {" "}
                  <p className="... overflow-hidden overflow-ellipsis text-xl font-medium text-indigo-600 hover:text-clip">
                    {list.note.name}
                  </p>
                </div>
                <div className="pr-4"> {DeleteButton()}</div>
              </div>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testlist;
