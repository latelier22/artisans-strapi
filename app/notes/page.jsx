import React from "react";
import fetchNotes from "../component/fetchNotes";
import BlockRendererClient from "../component/BlockRendererClient";
import Navbar from "../NavBarClient";
import Footer from "../Footer";

async function Notes() {
  const notes = await fetchNotes();

  return (
    <>
      <Navbar />
      <div className="pt-10 container mx-auto prose max-w-none">
      <BlockRendererClient content={notes[0].block} />
      </div>
      <Footer />
    </>
  );
}

export default Notes;
