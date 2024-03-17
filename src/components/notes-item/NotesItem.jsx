import Styles from "./notes-item.module.css";
import deleteImage from "../../assets/delete.png";

function NotesItem({ id, deleteNotes }) {
  return (
    <div className={Styles.notesContent}>
      <textarea></textarea>
      <button onClick={() => deleteNotes(id)}>
        <img src={deleteImage} alt="delete image" />
      </button>
    </div>
  );
}

export default NotesItem;
