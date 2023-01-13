import { useRouter } from 'next/router';
import { type FC, type FormEvent, useState, useEffect } from 'react';
import { trpc } from '../../utils/trpc';
import DropdownIconMenu from '../dropdown/dropdown_icon_menu';

export type EditorProps = {
    id?: string
};

const Editor: FC<EditorProps> = (props: EditorProps): JSX.Element => {
    const { id } = props;

    const queryResult = id ? trpc.note.getOne.useQuery(id) : undefined;
    const [initialQuery, setInitialQuery] = useState<boolean>(true);
    const saveMutation = trpc.note.saveNote.useMutation();

    const router = useRouter();

    const [titelInput, setTitel] = useState<string>('');
    const [text, setText] = useState<string>('');

    const saveHandler = () => {
        if(id) return saveMutation.mutate({id, titel: titelInput, text });
        saveMutation.mutate({ titel: titelInput, text });
    };
    const saveTitel = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        if(!id) return;
        saveMutation.mutate({ id, titel: titelInput, text });
    }

    useEffect(() => {
        if(!queryResult) return;
        const { data, error } = queryResult;
        if(data && initialQuery) {
            setTitel(data.titel);
            setText(data.text);
            setInitialQuery(false);
        }
        if(error) console.error(error);
    }, [queryResult, initialQuery]);

    return (
      <div className=" mx-auto max-w-2xl py-9">
        <div className=" py-1 px-3 sm:text-left lg:px-3 ">
          <div>
            <div>
              <div className="flex gap-x-96 py-0">
                {
                    queryResult === undefined
                    ? <input
                        type='text'
                        value={titelInput}
                        onChange={(e) => setTitel(e.target.value)}
                        onSubmit={(e) => saveTitel(e)}
                        className='py-1 text-3xl font-bold'/>
                    : <div className="py-1 text-3xl font-bold">{titelInput}</div>
                }
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
            placeholder="Write your thoughts here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-row-reverse gap-x-4 py-3 ">
          <button onClick={() => saveHandler()} className=" rounded-full border-2 border-black bg-white py-1 px-6 font-normal text-black hover:bg-gray-200">
            Save
          </button>
          <button onClick={() => router.push('/')} className="rounded-full border-2 border-black bg-white py-1 px-6 font-normal text-black hover:bg-gray-200">
            Cancel
          </button>
        </div>
      </div>
    );
};

export default Editor;
