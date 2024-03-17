import Styles from "./header.module.css";
import notesImage from "../../assets/notes.png";

function Header({ addNotes }) {
  return (
    <header className={Styles.header}>
      <button onClick={addNotes} className={Styles.headerButton}>
        <div className={Styles.headerImage}>
          <img src={notesImage} alt="notes" />
        </div>
        <p>Add Notes</p>
      </button>
    </header>
  );
}

export default Header;
