import React, { useState, useEffect } from "react";
import Classes from "../styles/styles.module.css";

const JSONServerData = () => {
  const [articles, setArticles] = useState([]);

  const url = "http://localhost:5555/articles";
  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return <div className={Classes.red}>{JSON.stringify(articles?.[0])}</div>;
};

export default JSONServerData;
