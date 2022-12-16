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
import { NextPage } from "next";
import * as React from "react";

const list = [
  {
    note: {
      name: "Einkaufsliste für Samstag Abend",
      notits: "Notits 1",
    },
    href: "#",
  },
  {
    note: {
      name: "Arzt Termine in einer Notits gesammelt",
      notits: "Notits 2",
    },
    href: "#",
  },
  {
    note: {
      name: "TÜV für das Auto / Geburtstagsgeschenk für Enkelkinder",
      notits: "Notits 3",
    },
    href: "#",
  },
];

const Testlist: NextPage = () => {
  return (
    <div className="mx-80 overflow-hidden bg-white">
      <ul
        role="list"
        className="divide-y-2 divide-gray-200 border-b-2 border-gray-200"
      >
        {list.map((list) => (
          <a href={list.href} className="block hover:bg-gray-100">
            <div className="flex justify-between py-6">
              <div className=" pl-4">
                {" "}
                <p className="... overflow-hidden overflow-ellipsis text-xl font-medium text-indigo-600 hover:text-clip">
                  {list.note.name}
                </p>
              </div>
              <div className="pr-4">
                {" "}
                <TrashIcon
                  className="h-7 w-7 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Testlist;
