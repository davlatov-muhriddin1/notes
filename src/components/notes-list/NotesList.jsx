import NotesItem from "../notes-item/NotesItem";
import Styles from "./notes-list.module.css";

function NotesList({ notes, deleteNotes }) {
  return (
    <div className={Styles.notesList}>
      {notes.map((item) => (
        <NotesItem key={item.id} {...item} deleteNotes={deleteNotes} />
      ))}
    </div>
  );
}

export default NotesList;
