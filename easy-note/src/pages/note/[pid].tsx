import type { NextPage } from "next";
import Header from "../../components/header/easynote_header";
import Editor from "../../components/note_editor/editor";

const EditNote: NextPage = (): JSX.Element => {
    return (
        <>
            <Header />
            <Editor />
        </>
    );
};

export default EditNote;
