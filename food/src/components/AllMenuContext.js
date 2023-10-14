import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";

// this is a named export
export const AllMenuContext = React.createContext();

export const AllMenus = (props) => {
  // state
  let [menu, setMenu] = useState([]);
  let [loading, setLoading] = useState(true);

  // get all the menus using Axios
  async function getAllTheMenus() {
    try {
      const response = await axios.get("http://localhost:4500/api");
      setMenu(response.data.meals);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoading(false);
    }
  }
  console.log('menu menu :',menu)

  useEffect(() => {
    getAllTheMenus();
  }, []);

  return (
    <AllMenuContext.Provider value={menu}>
      {!loading ? (
        props.children
      ) : (
        <div className="loader">
          <Loader />
        </div>
      )}
    </AllMenuContext.Provider>
  );
};
