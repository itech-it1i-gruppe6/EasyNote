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
      name: "Notits 1",
    },
    href: "#",
  },
  {
    note: {
      name: "Notits 2",
    },
    href: "#",
  },
  {
    note: {
      name: "Notits 3",
    },
    href: "#",
  },
];

const Testlist: NextPage = () => {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {list.map((list) => (
          <a href={list.href} className="block hover:bg-gray-100">
            <div className="flex items-center px-3 py-3 sm:px-3">
              <div className="flex min-w-0 flex-1 items-center">
                <div className="flex-shrink-0"></div>
                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                    <p className="truncate text-sm font-medium text-indigo-600">
                      {list.note.name}
                    </p>
                  </div>
                  <div className="hidden md:block"></div>
                </div>
              </div>
              <div>
                <TrashIcon
                  className="h-5 w-5 text-gray-400"
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
