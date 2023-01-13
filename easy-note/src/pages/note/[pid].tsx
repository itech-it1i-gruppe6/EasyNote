import type { NextPage } from "next";
import { useRouter } from "next/router";
import Header from "../../components/header/easynote_header";
import Editor from "../../components/note_editor/editor";

const EditNote: NextPage = (): JSX.Element => {
    const router = useRouter();
    const pid = router.query.pid as string;

    return (
        <>
            <Header />
            <Editor id={pid}/>
        </>
    );
};

export default EditNote;
