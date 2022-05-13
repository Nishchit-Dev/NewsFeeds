import axios from "axios";

import React, { useEffect, useState } from "react";
import { GoogleNewApi, NEWAPI } from "./component/apiRequest";
import Card from "./component/cardComponent/card";
import "./app.css";
// NEWAPI
// https://newsapi.org/v2/everything?domains=wsj.com&apiKey=caa5a90f0685491ba21b609e1ea2b841

// GOOGLE NEW-API
// https://google-news.p.rapidapi.com/v1/top_headlines

const App = () => {
  const [fetch, setFetch] = useState([]);

  const data = new Date("2022-05-12T13:07:37Z");
  const ETA = Date.now() - data.getTime();
  console.log(
    new Date(ETA).getMinutes(),
    "min",
    new Date(ETA).getHours(),
    "hours"
  );

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
      console.log(res);
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
