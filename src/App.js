import axios from "axios";

import React, { useEffect, useState } from "react";
import { GoogleNewApi, NEWAPI } from "./component/apiRequest";
import Card from "./component/cardComponent/card";
import "./app.css";


const App = () => {
  const [fetch, setFetch] = useState([]);
  const request = async (url) => {
    return await axios
      .request(url)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return "error";
      });
  };
  useEffect(() => {
    var resp = request(NEWAPI);
    resp.then((res) => {

      setFetch(res.articles);
    });
  }, []);

  const map = fetch.map((data, index) => {
    return <Card data={data} />;
  });

  return (
    <div className="sectionScroll">
      <div className="topHeadlines">
        <h1>Top Headlines</h1>
      </div>
      {map}
    </div>
  );
};

export default App;
