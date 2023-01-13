import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Header from "../components/header/easynote_header";
import NoteListView from "../components/notelist/noteslist";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  return (
    <>
        <Header />
        { sessionData ? <NoteListView /> : <div>Willkommen bei EasyNote</div>}
    </>
  );
};

export default Home;
