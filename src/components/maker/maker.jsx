import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "ellie",
      company: "samsung",
      theme: "dark",
      title: "software",
      email: "ellie@gmail.com",
      message: "go for it",
      filename: "elele",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "ellie",
      company: "samsung",
      theme: "light",
      title: "software",
      email: "ellie@gmail.com",
      message: "go for it",
      filename: "elele",
      fileURL: null,
    },
    3: {
      id: "3",
      name: "ellie",
      company: "samsung",
      theme: "colorful",
      title: "software",
      email: "ellie@gmail.com",
      message: "go for it",
      filename: "elele",
      fileURL: "",
    },
  });
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const createOrUupdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUupdateCard}
          updateCard={createOrUupdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
