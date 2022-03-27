import React from "react";
import CardEditorForm from "../card_editform/card_editor";
import styles from "./editor.module.css";

const Editor = ({ cards }) => {
  return (
    <>
      <section className={styles.editor}>
        <h1 className={styles.title}>Card Maker</h1>
        {cards.map((card) => (
          <CardEditorForm card={card} />
        ))}
      </section>
    </>
  );
};
export default Editor;
