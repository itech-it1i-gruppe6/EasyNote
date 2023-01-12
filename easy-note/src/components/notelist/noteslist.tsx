import type { FC } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { trpc } from "../../utils/trpc";

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

const Data = [
    {id: "1", titel: "Test 1"},
    {id: "[", titel: "Test 2"},
    {id: "1", titel: "Test 3"},
];

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
          {Data.map((note, idx) => (
            <a key={idx} href={`/note/${note.id}`} className="block hover:bg-gray-100">
              <div className="flex justify-between py-6">
                <div className="pl-4">
                  {" "}
                  <p className="... overflow-hidden overflow-ellipsis text-xl font-medium text-indigo-600 hover:text-clip">
                    {note.titel}
                  </p>
                </div>
                <div className="pr-4"> {DeleteButton()}</div>
              </div>
            </a>
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
