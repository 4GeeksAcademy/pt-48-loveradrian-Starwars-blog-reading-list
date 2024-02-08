import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { ListCards } from "../component/cards";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      {["planets", "people", "vehicles"].map((element) => (
        <ListCards key={element} element={element} />
      ))}
    </div>
  );
};
