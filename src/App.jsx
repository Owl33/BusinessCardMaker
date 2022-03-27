import React from "react";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";
import { Route, Routes } from "react-router-dom";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" exact element={<Login authService={authService} />} />
        <Route path="/login" element={<Login authService={authService} />} />
        <Route path="/maker" element={<Maker authService={authService} />} />
      </Routes>
    </div>
  );
}

export default App;
