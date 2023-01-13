import type { FC } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { trpc } from "../../utils/trpc";
import Link from "next/link";

const DeleteButton = () => {
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

const NoteListView: FC = () => {
    const { data, isLoading, isError } = trpc.note.getAll.useQuery();
    if(isLoading) return <>Loading</>;
    if(isError) return <>Error</>;
  return (
    <div style={{ padding: "0 20%" }}>
      <div className="mx-auto overflow-hidden bg-white">
        <ul
          role="list"
          className="divide-y-2 divide-gray-200 border-b-2 border-gray-200"
        >
          {data.map((note, idx) => (
              <div key={idx} className="flex justify-between py-6 hover:bg-gray-100">
                <Link href={`/note/${note.id}`} className="pl-4">
                  {" "}
                  <p className="... overflow-hidden overflow-ellipsis text-xl font-medium text-indigo-600 hover:text-clip">
                    {note.titel}
                  </p>
                </Link>
                <div className="pr-4"> {DeleteButton()}</div>
              </div>
          ))}
        <a href={"/note/new"} className="block hover:bg-gray-100">
            <div className="flex justify-between py-6 overflow-ellipsis text-xl font-medium text-gray-800 text-center">
                Notiz erstellen
            </div>
        </a>
        </ul>
      </div>
    </div>
  );
};

export default NoteListView;
